import "tailwindcss";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "./components/ui/button";  
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";  
import { Input } from "./components/ui/input";  

const SurpriseAnnouncement = () => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState('');
  const [countdown, setCountdown] = useState(3);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (countdown > 0 && !showPassword) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && !showPassword) {
      setShowSurprise(true);
      setShowConfetti(true);
    }
  }, [countdown, showPassword]);

  const handlePasswordSubmit = () => {
    if (password === 'askala43keren') {
      setShowPassword(false);
    }
  };

  const resetAnimation = () => {
    setShowSurprise(false);
    setShowPassword(true);
    setPassword('');
    setCountdown(3);
    setShowConfetti(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-4">
      <div className="text-center">
        <AnimatePresence> 
          {showPassword ? (
            <motion.div
              key="password
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }} 
              className="space-y-6
            >
              <Card className="w-full max-w-md mx-auto bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    hayoo apa password nya :p 
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    type="password"
                    value={password}
                    onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
                    placeholder="clue pw nya guest star askala 43' hihi..."
                    className="text-center text-lg"
                    onKeyPress={(e: { key: string; }) => e.key === 'Enter' && handlePasswordSubmit()}
                  /> 
                  <Button 
                    onClick={handlePasswordSubmit}
                    className="w-full"
                  >
                    buka kejutan
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ) : !showSurprise ? (
            <motion.div
              key="countdown"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              className="space-y-6"
            >
              <Card className="w-full max-w-md mx-auto bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    siap siap dapet kejutan!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div
                    key={countdown}
                    initial={{ scale: 1.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-6xl font-bold text-primary mb-6"
                  > 
                    {countdown}
                  </motion.div>
                  <p className="text-muted-foreground">
                    penentuan pengumuman sk Askala 43'...
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="surprise"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="space-y-8 relative"
            >
              {/* Confetti Animation */}
              {showConfetti && [...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#F9A826', '#6C5CE7'][i % 5],
                  }}
                  initial={{ y: -100, opacity: 0, scale: 0 }}
                  animate={{ 
                    y: window.innerHeight,
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0.5],
                    rotate: Math.random() * 360
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    delay: Math.random() * 0.5,
                    ease: "easeOut"
                  }} 
                />
              ))}

              {/* Enhanced Fireworks */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                  transition={{
                    delay: i * 0.2,
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                  className="absolute"
                  style={{
                    left: `${10 + (i * 7)}%`,
                    top: `${5 + (i % 4) * 20}%`,
                  }}
                >
                  <div className={`w-6 h-6 rounded-full shadow-lg ${
                    ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-400', 'bg-purple-500'][i % 5]
                  }`} />
                </motion.div>
              ))}

              <Card className="w-full max-w-md mx-auto bg-gradient-to-r from-primary via-purple-600 to-pink-500 text-white relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-red-400/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                /> 
                <div className="relative z-10">
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold">
                      🎉 congratss! 🎉
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-3xl font-semibold"
                    >
                      PENGUMUMAN SK ASKALA 
                    </motion.div>
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-xl"
                    >
                      sk Askala 43'! selamat dan semangat yaa semuaaa ^^
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.2, type: "spring" }}
                      className="text-5xl font-bold text-yellow-300 mt-4"
                    >
                      ASKALA 43
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8 }}
                      className="text-lg text-yellow-200"
                    > 
                      Selamat dan semangat!
                    </motion.div>
                  </CardContent>
                </div>
              </Card>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0 }}
              >
                <Button 
                  onClick={resetAnimation}
                  variant="secondary"
                  className="mt-6 bg-white text-primary hover:bg-gray-100"
                  size="lg"
                >
                  🔄 Tampilkan Lagi
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SurpriseAnnouncement 
