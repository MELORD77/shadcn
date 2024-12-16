import { motion } from "framer-motion";
import icon from "@/assets/error.png";
export default function Alarm() {
  return (
    <div>
      <div className="relative w-60 h-60">
        <div className="absolute inset-0  [clip-path:polygon(3%_1%,2%_3%,50%_100%,99%_1%,98%_1%,98%_1%)] bg-gradient-to-b from-red-600 to-sky-500"></div>
        <div className="absolute inset-[10px] [clip-path:polygon(3%_0,_50%_95%,_97%_0)] bg-black flex items-start justify-center text-white ">
          Men Uyquchiman
        </div>
        <img
          src={icon}
          alt="icon"
          className="w-28 h-28 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3"
        />
      </div>
      <div className="w-full h-full flex items-center justify-center translate-y-[-70px]">
        <div
          style={{
            // perspective: "1000px",

            transform: "rotateX(60deg)",
          }}
          className="relative z-10 rounded-full w-40 h-40 bg-gradient-to-b from-sky-600/[0.08] to-sky-500"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: 1,

              z: 0,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 0,
            }}
            className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-600/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          ></motion.div>
        </div>
      </div>
    </div>
  );
}
