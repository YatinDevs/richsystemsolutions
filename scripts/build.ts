// scripts/build.ts - Fixed version
import { execSync } from "child_process";
import { generateSEOFiles } from "@/lib/generate-seo";
import fs from "fs";
import path from "path";

// Colors for console output
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  red: "\x1b[31m",
};

async function build() {
  console.log(`
${colors.cyan}╔══════════════════════════════════════════════════════════╗${colors.reset}
${colors.cyan}║    🚀 Rich System Solutions - Production Build           ║${colors.reset}
${colors.cyan}╚══════════════════════════════════════════════════════════╝${colors.reset}
  `);

  const startTime = Date.now();

  try {
    // Create environment object without modifying process.env directly
    const env = {
      ...process.env,
      NEXT_PUBLIC_SITE_URL:
        process.env.NEXT_PUBLIC_SITE_URL || "https://richsol.com",
      // Don't set NODE_ENV here, let cross-env handle it
    };

    console.log(`${colors.blue}Environment:${colors.reset}`);
    console.log(
      `   ${colors.blue}→${colors.reset} NEXT_PUBLIC_SITE_URL: ${env.NEXT_PUBLIC_SITE_URL}`
    );
    console.log(
      `   ${colors.blue}→${colors.reset} NODE_ENV: ${
        process.env.NODE_ENV || "production"
      }`
    );

    // Step 1: Clean previous build
    console.log(
      `${colors.yellow}📦 Step 1: Cleaning previous build...${colors.reset}`
    );

    const dirsToClean = [".next", "out", "dist", ".turbo"];
    dirsToClean.forEach((dir) => {
      const dirPath = path.join(process.cwd(), dir);
      if (fs.existsSync(dirPath)) {
        try {
          fs.rmSync(dirPath, { recursive: true, force: true });
          console.log(`   ${colors.green}✓${colors.reset} Removed ${dir}/`);
        } catch (error) {
          console.log(
            `   ${colors.yellow}⚠${colors.reset} Could not remove ${dir}/ (may be in use)`
          );
        }
      }
    });

    // Step 2: Generate SEO files BEFORE Next.js build
    console.log(
      `\n${colors.yellow}🔧 Step 2: Generating SEO files...${colors.reset}`
    );
    try {
      await generateSEOFiles();
    } catch (seoError) {
      console.log(
        `${colors.yellow}⚠  SEO generation had issues, continuing anyway...${colors.reset}`
      );
      console.log(
        `${colors.yellow}   Error: ${
          seoError instanceof Error ? seoError.message : "Unknown error"
        }${colors.reset}`
      );
    }

    // Verify SEO files were created
    const publicDir = path.join(process.cwd(), "public");
    const requiredFiles = ["sitemap.xml", "robots.txt", "manifest.json"];

    console.log(`${colors.blue}   Checking generated files:${colors.reset}`);
    requiredFiles.forEach((file) => {
      const filePath = path.join(publicDir, file);
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        console.log(
          `   ${colors.green}✓${colors.reset} ${file} (${(
            stats.size / 1024
          ).toFixed(2)} KB)`
        );
      } else {
        console.log(`   ${colors.red}✗${colors.reset} ${file} not found!`);
      }
    });

    // Step 3: Run Next.js build
    console.log(
      `\n${colors.yellow}⚡ Step 3: Running Next.js build...${colors.reset}`
    );
    console.log(
      `${colors.blue}   This may take a few minutes...${colors.reset}`
    );

    const buildStartTime = Date.now();

    try {
      // Use the env object we created
      execSync("next build", {
        stdio: "inherit",
        env: {
          ...env,
          NEXT_TELEMETRY_DISABLED: "1",
        },
      });
    } catch (buildError) {
      console.log(
        `\n${colors.red}══════════════════════════════════════════════════════════${colors.reset}`
      );
      console.log(`${colors.red}   Next.js build failed!${colors.reset}`);
      console.log(
        `${colors.red}══════════════════════════════════════════════════════════${colors.reset}`
      );
      throw buildError;
    }

    const buildEndTime = Date.now();
    const buildDuration = ((buildEndTime - buildStartTime) / 1000).toFixed(2);
    console.log(
      `   ${colors.green}✓${colors.reset} Build completed in ${buildDuration}s`
    );

    // Step 4: Post-build processing
    console.log(
      `\n${colors.yellow}📁 Step 4: Post-build processing...${colors.reset}`
    );

    const outDir = path.join(process.cwd(), "out");
    const publicFiles = [
      "sitemap.xml",
      "robots.txt",
      "manifest.json",
      "browserconfig.xml",
    ];

    // Check if out directory exists
    if (!fs.existsSync(outDir)) {
      console.log(
        `${colors.red}✗${colors.reset} out/ directory not found! Build may have failed.`
      );
      console.log(
        `${colors.yellow}   Checking .next directory...${colors.reset}`
      );

      const nextDir = path.join(process.cwd(), ".next");
      if (fs.existsSync(nextDir)) {
        console.log(`${colors.green}✓${colors.reset} .next/ directory exists`);

        // Check if we need to copy from .next/static
        const staticDir = path.join(nextDir, "static");
        if (fs.existsSync(staticDir)) {
          console.log(
            `${colors.yellow}⚠${colors.reset} Static files are in .next/static/ - creating out/ directory`
          );
          fs.mkdirSync(outDir, { recursive: true });
        }
      } else {
        console.log(
          `${colors.red}✗${colors.reset} Neither out/ nor .next/ directory found!`
        );
        throw new Error("Build output not found");
      }
    }

    // Copy SEO files to out directory
    console.log(`${colors.blue}   Copying SEO files to out/:${colors.reset}`);
    let filesCopied = 0;

    publicFiles.forEach((file) => {
      const source = path.join(publicDir, file);
      const destination = path.join(outDir, file);

      if (fs.existsSync(source)) {
        try {
          fs.copyFileSync(source, destination);
          console.log(`   ${colors.green}✓${colors.reset} Copied ${file}`);
          filesCopied++;
        } catch (copyError) {
          console.log(
            `   ${colors.red}✗${colors.reset} Failed to copy ${file}: ${
              copyError instanceof Error ? copyError.message : "Unknown error"
            }`
          );
        }
      } else {
        console.log(
          `   ${colors.yellow}⚠${colors.reset} ${file} not found in public/`
        );
      }
    });

    // Step 5: Verify output
    console.log(
      `\n${colors.yellow}✅ Step 5: Final verification...${colors.reset}`
    );

    if (fs.existsSync(outDir)) {
      const outFiles = fs.readdirSync(outDir);
      const importantFiles = ["index.html", "sitemap.xml", "robots.txt"];

      importantFiles.forEach((file) => {
        const filePath = path.join(outDir, file);
        if (fs.existsSync(filePath)) {
          const stats = fs.statSync(filePath);
          console.log(
            `   ${colors.green}✓${colors.reset} out/${file} (${(
              stats.size / 1024
            ).toFixed(2)} KB)`
          );
        } else {
          console.log(
            `   ${colors.yellow}⚠${colors.reset} out/${file} not found`
          );
        }
      });

      console.log(
        `   ${colors.green}✓${colors.reset} Total files in out/: ${outFiles.length}`
      );

      // Generate build info
      const totalDuration = ((Date.now() - startTime) / 1000).toFixed(2);

      // Safely get page count
      let pageCount = 0;
      try {
        const { pageSEO } = require("@/utils/seoConfig");
        pageCount = Object.keys(pageSEO).length;
      } catch (error) {
        console.log(
          `   ${colors.yellow}⚠${colors.reset} Could not get page count from seoConfig`
        );
      }

      const buildInfo = {
        buildTime: new Date().toISOString(),
        buildDuration: `${buildDuration}s`,
        totalDuration: `${totalDuration}s`,
        siteName: "Rich System Solutions Pvt Ltd",
        baseUrl: env.NEXT_PUBLIC_SITE_URL,
        pages: pageCount,
        nodeVersion: process.version,
        filesCopied: filesCopied,
      };

      fs.writeFileSync(
        path.join(outDir, "build-info.json"),
        JSON.stringify(buildInfo, null, 2)
      );
      console.log(
        `   ${colors.green}✓${colors.reset} Generated build-info.json`
      );
    } else {
      console.log(
        `${colors.red}✗${colors.reset} out/ directory still doesn't exist after build!`
      );
      throw new Error("Build output directory not created");
    }

    // Step 6: Build Summary
    const totalDuration = ((Date.now() - startTime) / 1000).toFixed(2);

    console.log(`
${colors.green}╔══════════════════════════════════════════════════════════╗${
      colors.reset
    }
${colors.green}║                    🎉 BUILD COMPLETED!                  ║${
      colors.reset
    }
${colors.green}╠══════════════════════════════════════════════════════════╣${
      colors.reset
    }
${colors.green}║  📊 Summary:                                            ║${
      colors.reset
    }
${colors.green}║    • Site: Rich System Solutions Pvt Ltd                ║${
      colors.reset
    }
${colors.green}║    • Build time: ${buildDuration.toString().padEnd(31)}s ║${
      colors.reset
    }
${colors.green}║    • Total time: ${totalDuration.toString().padEnd(30)}s ║${
      colors.reset
    }
${colors.green}║    • Output: out/ directory                            ║${
      colors.reset
    }
${colors.green}║    • Files copied: ${filesCopied.toString().padEnd(32)} ║${
      colors.reset
    }
${colors.green}╚══════════════════════════════════════════════════════════╝${
      colors.reset
    }
${colors.cyan}📤 Deployment Instructions:${colors.reset}
${colors.blue}1.${
      colors.reset
    } Upload ALL contents of the 'out' folder to Hostinger
${colors.blue}2.${colors.reset} NOT the 'out' folder itself, just its contents
${colors.blue}3.${
      colors.reset
    } Upload to: public_html/ on your Hostinger account
${colors.blue}4.${colors.reset} Verify at: ${
      env.NEXT_PUBLIC_SITE_URL
    }/sitemap.xml
${colors.blue}5.${colors.reset} Test robots.txt: ${
      env.NEXT_PUBLIC_SITE_URL
    }/robots.txt

${colors.magenta}🔍 Quick Verification:${colors.reset}
${colors.blue}curl -I ${env.NEXT_PUBLIC_SITE_URL}/sitemap.xml${colors.reset}
${colors.blue}curl -I ${env.NEXT_PUBLIC_SITE_URL}/robots.txt${colors.reset}`);
  } catch (error) {
    console.error(
      `\n${colors.red}══════════════════════════════════════════════════════════${colors.reset}`
    );
    console.error(`${colors.red}   BUILD FAILED!${colors.reset}`);
    console.error(
      `${colors.red}══════════════════════════════════════════════════════════${colors.reset}`
    );

    if (error instanceof Error) {
      console.error(`${colors.red}Error:${colors.reset} ${error.message}`);

      // Show stack trace for debugging
      if (process.env.NODE_ENV !== "production") {
        console.error(`${colors.red}Stack:${colors.reset}`, error.stack);
      }
    }

    console.log(`\n${colors.yellow}💡 Troubleshooting tips:${colors.reset}`);
    console.log(
      `${colors.blue}1.${colors.reset} Try building without custom script: npx next build`
    );
    console.log(
      `${colors.blue}2.${colors.reset} Check next.config.ts for output: 'export'`
    );
    console.log(
      `${colors.blue}3.${colors.reset} Clear cache: npx next --no-cache build`
    );
    console.log(
      `${colors.blue}4.${colors.reset} Check Node.js version: node --version (should be 18+)`
    );

    process.exit(1);
  }
}

// Run the build
build();
