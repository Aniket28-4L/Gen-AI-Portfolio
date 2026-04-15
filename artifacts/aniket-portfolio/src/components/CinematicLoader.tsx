import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CinematicLoader({ children }: any) {
  const [loading, setLoading] = useState(true);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={styles.overlay}
        >
          {/* Background glow */}
          <motion.div
            style={{
              ...styles.glow,
              transform: `translate(${mouse.x}px, ${mouse.y}px)`
            }}
          />

          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={styles.logoContainer}
          >
            {/* AP Logo */}
            <div style={styles.logo}>
              <span style={styles.text}>AP</span>

              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
                style={styles.shine}
              />
            </div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={styles.name}
            >
              Aniket Pandey
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              style={styles.title}
            >
              GenAI Systems Developer | AI Product Builder
            </motion.div>
          </motion.div>
        </motion.div>
      ) : (
        children
      )}
    </AnimatePresence>
  );
}

const styles: any = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "radial-gradient(circle at center, #0a0a0a, #000)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99999,
    overflow: "hidden",
  },
  glow: {
    position: "absolute",
    width: "400px",
    height: "400px",
    background: "radial-gradient(circle, rgba(255,255,255,0.08), transparent)",
    borderRadius: "50%",
    filter: "blur(80px)",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  logo: {
    position: "relative",
    fontSize: "72px",
    fontWeight: "900",
    letterSpacing: "12px",
    overflow: "hidden",
  },
  text: {
    background: "linear-gradient(90deg, #fff, #aaa, #fff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  shine: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "50%",
    height: "100%",
    background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
    transform: "skewX(-20deg)",
  },
  name: {
    fontSize: "18px",
    color: "#ccc",
    letterSpacing: "2px",
  },
  title: {
    fontSize: "12px",
    color: "#888",
    letterSpacing: "1px",
  },
};
