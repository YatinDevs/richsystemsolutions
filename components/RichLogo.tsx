// components/RichLogo.tsx
import { Richlogo } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

const RichLogo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <motion.div
      className={`flex items-center gap-2 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Image
          src={Richlogo}
          alt="Rich System Solutions Logo"
          width={96}
          height={96}
          className="p-3 w-24 h-24 md:w-[140px] md:h-[120px]"
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default RichLogo;
