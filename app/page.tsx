"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Gamepad2,
  Zap,
  Users,
  Trophy,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
  Star,
  Heart,
  Sword,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function GameHouseLanding() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [gameStats, setGameStats] = useState({
    health: 100,
    mana: 85,
    xp: 67,
    level: 12,
  })
  const [pixelSprites, setPixelSprites] = useState<Array<{ id: number; x: number; y: number; type: string }>>([])

  // Generate pixel sprites for background
  useEffect(() => {
    const sprites = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      type: ["creeper", "steve", "diamond", "heart", "star"][Math.floor(Math.random() * 5)],
    }))
    setPixelSprites(sprites)
  }, [])

  // Animate game stats
  useEffect(() => {
    const interval = setInterval(() => {
      setGameStats((prev) => ({
        health: Math.max(20, Math.min(100, prev.health + (Math.random() - 0.5) * 10)),
        mana: Math.max(10, Math.min(100, prev.mana + (Math.random() - 0.5) * 15)),
        xp: Math.min(100, prev.xp + Math.random() * 2),
        level: prev.xp >= 100 ? prev.level + 1 : prev.level,
      }))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("loading")

    await new Promise((resolve) => setTimeout(resolve, 2000))

    if (contactForm.name && contactForm.email && contactForm.message) {
      setFormStatus("success")
      setContactForm({ name: "", email: "", message: "" })
      setTimeout(() => setFormStatus("idle"), 5000)
    } else {
      setFormStatus("error")
      setTimeout(() => setFormStatus("idle"), 3000)
    }
  }

  const logos = ["UNITY", "UNREAL", "STEAM", "NINTENDO", "SONY", "XBOX", "ANDROID", "iOS"]

  // Pixel art components
  const PixelSprite = ({ type, className = "" }: { type: string; className?: string }) => {
    const sprites = {
      creeper: "🟢",
      steve: "🧑‍🦲",
      diamond: "💎",
      heart: "❤️",
      star: "⭐",
      coin: "🪙",
      gem: "💜",
      sword: "⚔️",
      shield: "🛡️",
    }
    return <span className={`text-2xl ${className}`}>{sprites[type as keyof typeof sprites] || "🟦"}</span>
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
      {/* Minecraft-style Pixelated Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        {/* Pixel grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                #1a1a1a 0px,
                #1a1a1a 8px,
                #2a2a2a 8px,
                #2a2a2a 16px
              ),
              repeating-linear-gradient(
                90deg,
                #1a1a1a 0px,
                #1a1a1a 8px,
                #2a2a2a 8px,
                #2a2a2a 16px
              )
            `,
          }}
        />

        {/* Animated pixel sprites */}
        {pixelSprites.map((sprite) => (
          <div
            key={sprite.id}
            className="absolute animate-bounce"
            style={{
              left: `${sprite.x}%`,
              top: `${sprite.y}%`,
              animationDelay: `${sprite.id * 0.2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <PixelSprite type={sprite.type} />
          </div>
        ))}
      </div>

      {/* Game UI Header */}
      <header className="relative z-10 bg-gray-800/90 backdrop-blur-sm border-b-4 border-green-500" role="banner">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Gamepad2 className="h-10 w-10 text-green-400 animate-pulse" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">
                  !
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-green-400 font-mono">GAMEHOUSE</h1>
                <div className="text-xs text-gray-400 font-mono">🇰🇷 SEOUL SERVER • ONLINE</div>
              </div>
            </div>

            {/* Game Stats UI */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-red-500" />
                <Progress value={gameStats.health} className="w-20 h-2" />
                <span className="text-xs font-mono text-red-400">{gameStats.health}/100</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-blue-500" />
                <Progress value={gameStats.mana} className="w-20 h-2" />
                <span className="text-xs font-mono text-blue-400">{gameStats.mana}/100</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-mono text-yellow-400">LVL {gameStats.level}</span>
              </div>
            </div>

            <nav className="hidden lg:flex space-x-6" role="navigation" aria-label="Main navigation">
              {[
                { name: "HOME", href: "#home", icon: "🏠" },
                { name: "GAMES", href: "#games", icon: "🎮" },
                { name: "ABOUT", href: "#about", icon: "ℹ️" },
                { name: "CONTACT", href: "#contact", icon: "📧" },
              ].map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 text-green-400 hover:text-yellow-400 transition-colors font-mono text-sm border-2 border-transparent hover:border-yellow-400 px-3 py-1 rounded"
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Game Start Screen */}
      <section id="home" className="relative z-10 py-20 md:py-32" role="main">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Game Title Screen */}
            <div className="bg-gray-800/80 border-4 border-green-500 rounded-lg p-8 mb-8 relative overflow-hidden">
              <div className="absolute top-4 left-4 flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold mb-6 font-mono">
                <span className="text-green-400 animate-pulse drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">GAME</span>
                <br />
                <span className="text-yellow-400 animate-pulse drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]">HOUSE</span>
              </h1>

              <div className="text-xl md:text-2xl mb-6 font-mono text-cyan-400 bg-gray-900/50 inline-block px-4 py-2 rounded border-2 border-cyan-400">
                &gt; KOREAN RETRO GAMING DEVELOPER 🇰🇷 &lt;
              </div>

              <div className="flex justify-center space-x-4 mb-8">
                <PixelSprite type="sword" className="animate-bounce" />
                <PixelSprite type="shield" className="animate-bounce" />
                <PixelSprite type="gem" className="animate-bounce" />
              </div>
            </div>

            <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto bg-gray-800/50 p-4 rounded border-l-4 border-green-500">
              <strong>MISSION:</strong> Creating pixel-perfect adventures and nostalgic gaming experiences that
              transport you back to the golden age of gaming with Korean innovation and modern technology.
            </p>

            {/* Game Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white font-mono text-lg px-8 py-4 border-4 border-green-400 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <Gamepad2 className="mr-2 h-5 w-5" />
                [ENTER] PLAY NOW
              </Button>
              <Button
                variant="outline"
                className="border-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-mono text-lg px-8 py-4 bg-transparent transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                [TAB] VIEW GAMES
              </Button>
            </div>

            {/* XP Bar */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="flex justify-between text-sm font-mono text-gray-400 mb-2">
                <span>EXPERIENCE</span>
                <span>{gameStats.xp}/100 XP</span>
              </div>
              <Progress value={gameStats.xp} className="h-4 bg-gray-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Spinning Achievement Banner */}
      <section
        className="relative z-10 py-6 bg-gradient-to-r from-green-900/30 to-yellow-900/30 overflow-hidden border-y-2 border-green-500"
        aria-label="Partner platforms"
      >
        <div className="flex animate-scroll">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 text-xl font-mono text-green-400/80 hover:text-green-400 transition-colors duration-300 transform hover:scale-110 bg-gray-800/50 px-4 py-2 rounded border border-green-500/30"
            >
              🏆 {logo}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Games - Game Selection Screen */}
      <section id="games" className="relative z-10 py-20 bg-gradient-to-b from-transparent to-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-mono mb-4">
              <span className="text-green-400">FEATURED</span> <span className="text-yellow-400">GAMES</span>
            </h2>
            <div className="text-lg font-mono text-gray-400 bg-gray-800/50 inline-block px-6 py-2 rounded border-2 border-green-500">
              SELECT YOUR ADVENTURE
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "NEON RUNNER",
                description: "High-speed cyberpunk racing through Seoul's neon streets with Korean street culture",
                status: "AVAILABLE",
                difficulty: "★★★☆☆",
                players: "1-4",
                genre: "RACING",
                color: "from-cyan-500 to-blue-500",
                icon: "🏎️",
              },
              {
                title: "PIXEL WARRIORS",
                description: "Classic 16-bit style RPG featuring Korean mythology and legendary creatures",
                status: "COMING SOON",
                difficulty: "★★★★☆",
                players: "1-2",
                genre: "RPG",
                color: "from-purple-500 to-pink-500",
                icon: "⚔️",
              },
              {
                title: "ARCADE LEGENDS",
                description: "Retro arcade collection with modern Korean gaming twists and local multiplayer",
                status: "BETA",
                difficulty: "★★☆☆☆",
                players: "1-8",
                genre: "ARCADE",
                color: "from-yellow-500 to-orange-500",
                icon: "🕹️",
              },
            ].map((game, index) => (
              <Card
                key={index}
                className="bg-gray-800/80 border-4 border-green-500/50 hover:border-yellow-400 transition-all duration-500 group transform hover:scale-105 hover:-rotate-1 relative overflow-hidden"
              >
                <CardHeader className="p-0 relative">
                  <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-900 border-b-4 border-green-500">
                    {/* Game Preview Screen */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                    />

                    {/* Pixel Art Game Preview */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-2 animate-bounce">{game.icon}</div>
                        <div className="bg-gray-900/80 px-4 py-2 rounded font-mono text-sm border-2 border-green-400">
                          LOADING...
                        </div>
                      </div>
                    </div>

                    {/* Game UI Elements */}
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <div
                        className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>

                    <Badge
                      className={`absolute top-4 right-4 font-mono border-2 ${
                        game.status === "AVAILABLE"
                          ? "bg-green-600 border-green-400"
                          : game.status === "BETA"
                            ? "bg-yellow-600 border-yellow-400"
                            : "bg-purple-600 border-purple-400"
                      }`}
                    >
                      {game.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-6 bg-gray-800/90">
                  <div className="flex justify-between items-start mb-3">
                    <CardTitle className="text-xl font-mono text-green-400 group-hover:text-yellow-400 transition-colors">
                      {game.title}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs font-mono border-cyan-400 text-cyan-400">
                      {game.genre}
                    </Badge>
                  </div>

                  <CardDescription className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {game.description}
                  </CardDescription>

                  {/* Game Stats */}
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                    <div className="bg-gray-700/50 p-2 rounded border border-green-500/30">
                      <div className="text-gray-400">DIFFICULTY</div>
                      <div className="text-yellow-400">{game.difficulty}</div>
                    </div>
                    <div className="bg-gray-700/50 p-2 rounded border border-green-500/30">
                      <div className="text-gray-400">PLAYERS</div>
                      <div className="text-green-400">{game.players}</div>
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 font-mono border-2 border-green-400 transform hover:scale-105 transition-all duration-300">
                    [ENTER] LAUNCH GAME
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Character Stats Screen */}
      <section id="about" className="relative z-10 py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 font-mono">
                <span className="text-green-400">ABOUT</span> <span className="text-yellow-400">US</span>
              </h2>

              <div className="bg-gray-800/80 border-4 border-green-500 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-mono text-cyan-400 mb-4 flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  GUILD INFORMATION
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  <strong>Founded:</strong> Seoul, South Korea 🇰🇷
                  <br />
                  <strong>Specialization:</strong> Retro Gaming Development
                  <br />
                  <strong>Mission:</strong> Reviving the golden era of gaming with modern Korean innovation
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We blend nostalgic 8-bit and 16-bit aesthetics with contemporary gameplay mechanics, creating unique
                  experiences that honor gaming's past while embracing its future with Korean cultural elements.
                </p>
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/80 border-4 border-green-500 rounded-lg p-4 text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-green-400 font-mono mb-1">10+</div>
                  <div className="text-sm text-gray-400 font-mono">GAMES RELEASED</div>
                  <div className="text-xs text-green-400 mt-1">🏆 ACHIEVEMENT UNLOCKED</div>
                </div>
                <div className="bg-gray-800/80 border-4 border-yellow-500 rounded-lg p-4 text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-yellow-400 font-mono mb-1">50K+</div>
                  <div className="text-sm text-gray-400 font-mono">ACTIVE PLAYERS</div>
                  <div className="text-xs text-yellow-400 mt-1">🎮 COMMUNITY STRONG</div>
                </div>
              </div>
            </div>

            {/* Game Development Console */}
            <div className="relative">
              <div className="bg-gray-900 border-4 border-green-500 rounded-lg p-6 font-mono text-sm">
                <div className="flex items-center justify-between mb-4 border-b border-green-500 pb-2">
                  <span className="text-green-400">GAMEHOUSE DEVELOPMENT CONSOLE</span>
                  <span className="text-yellow-400">🇰🇷 SEOUL</span>
                </div>

                {/* Console Output */}
                <div className="space-y-2 text-green-400">
                  <div className="animate-pulse">&gt; Initializing Korean Gaming Studio...</div>
                  <div className="animate-pulse" style={{ animationDelay: "0.5s" }}>
                    &gt; Loading pixel art assets... ✓
                  </div>
                  <div className="animate-pulse" style={{ animationDelay: "1s" }}>
                    &gt; Compiling retro soundtracks... ✓
                  </div>
                  <div className="animate-pulse" style={{ animationDelay: "1.5s" }}>
                    &gt; Integrating Korean culture... ✓
                  </div>
                  <div className="animate-pulse" style={{ animationDelay: "2s" }}>
                    &gt; Deploying nostalgia engine... ✓
                  </div>
                  <div className="text-yellow-400 animate-pulse" style={{ animationDelay: "2.5s" }}>
                    &gt; STATUS: READY TO CREATE MAGIC! 🎮
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="mt-6 space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-cyan-400">CREATIVITY</span>
                      <span className="text-cyan-400">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-purple-400">INNOVATION</span>
                      <span className="text-purple-400">88%</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-yellow-400">KOREAN FLAIR</span>
                      <span className="text-yellow-400">100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Skill Tree */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-gray-800/50 to-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 font-mono">
            <span className="text-green-400">SKILL</span> <span className="text-yellow-400">TREE</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Gamepad2 className="h-12 w-12" />,
                title: "GAME DEVELOPMENT",
                description: "Custom retro-style games for all platforms with Korean storytelling",
                level: "MASTER",
                xp: "10,000 XP",
              },
              {
                icon: <Zap className="h-12 w-12" />,
                title: "PIXEL ART",
                description: "Authentic 8-bit and 16-bit artwork and animations with Korean aesthetics",
                level: "EXPERT",
                xp: "8,500 XP",
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "CONSULTING",
                description: "Expert advice on retro game design and Korean market insights",
                level: "ADVANCED",
                xp: "7,200 XP",
              },
              {
                icon: <Trophy className="h-12 w-12" />,
                title: "PORTING",
                description: "Bringing classic games to modern platforms with enhanced features",
                level: "EXPERT",
                xp: "9,100 XP",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gray-800/80 border-4 border-green-500/50 hover:border-yellow-400 transition-all duration-500 text-center group transform hover:scale-105 hover:-rotate-1 relative overflow-hidden"
              >
                <CardContent className="p-6">
                  {/* Skill Icon */}
                  <div className="relative mb-4">
                    <div className="w-20 h-20 mx-auto bg-gray-700 border-4 border-green-400 rounded-lg flex items-center justify-center group-hover:border-yellow-400 transition-colors">
                      <div className="text-green-400 group-hover:text-yellow-400 transition-colors group-hover:scale-110 transform duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <Badge className="absolute -top-2 -right-2 bg-yellow-600 border-yellow-400 text-xs font-mono">
                      {service.level}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-mono text-green-400 group-hover:text-yellow-400 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>

                  {/* XP Bar */}
                  <div className="bg-gray-700 rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-to-r from-green-400 to-yellow-400 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <div className="text-xs font-mono text-gray-400">{service.xp}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Quest Giver Interface */}
      <section id="contact" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-mono mb-4">
              <span className="text-green-400">START</span> <span className="text-yellow-400">QUEST</span>
            </h2>
            <div className="text-lg font-mono text-gray-400 bg-gray-800/50 inline-block px-6 py-2 rounded border-2 border-green-500">
              💬 TALK TO QUEST GIVER
            </div>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* NPC Info Panel */}
            <div className="bg-gray-800/80 border-4 border-green-500 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mr-4 border-2 border-green-400">
                  <span className="text-2xl">🎮</span>
                </div>
                <div>
                  <h3 className="text-xl font-mono text-green-400">QUEST GIVER</h3>
                  <div className="text-sm font-mono text-gray-400">GameHouse.info Team 🇰🇷</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 group hover:text-green-400 transition-colors bg-gray-700/50 p-3 rounded border border-green-500/30">
                  <Mail className="h-6 w-6 text-yellow-400 group-hover:animate-bounce" />
                  <div>
                    <div className="font-mono text-sm">EMAIL QUEST</div>
                    <div className="font-mono text-xs text-gray-400">hello@gamehouse.info</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group hover:text-green-400 transition-colors bg-gray-700/50 p-3 rounded border border-green-500/30">
                  <Phone className="h-6 w-6 text-yellow-400 group-hover:animate-bounce" />
                  <div>
                    <div className="font-mono text-sm">VOICE CHAT</div>
                    <div className="font-mono text-xs text-gray-400">+82-2-1234-5678</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group hover:text-green-400 transition-colors bg-gray-700/50 p-3 rounded border border-green-500/30">
                  <MapPin className="h-6 w-6 text-yellow-400 group-hover:animate-bounce" />
                  <div>
                    <div className="font-mono text-sm">LOCATION</div>
                    <div className="font-mono text-xs text-gray-400">Seoul, South Korea 🇰🇷</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quest Form */}
            <div className="bg-gray-800/80 border-4 border-green-500 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-mono text-green-400 mb-6 flex items-center">
                <Sword className="mr-2 h-5 w-5" />
                SEND MESSAGE QUEST
              </h3>

              {formStatus === "success" && (
                <div className="mb-6 p-4 bg-green-600/20 border-2 border-green-400 rounded-lg flex items-center space-x-2 animate-pulse">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <div>
                    <div className="text-green-400 font-mono text-sm">QUEST COMPLETED! 🎉</div>
                    <div className="text-green-300 font-mono text-xs">+100 XP • Message delivered successfully!</div>
                  </div>
                </div>
              )}

              {formStatus === "error" && (
                <div className="mb-6 p-4 bg-red-600/20 border-2 border-red-400 rounded-lg flex items-center space-x-2 animate-pulse">
                  <AlertCircle className="h-5 w-5 text-red-400" />
                  <div>
                    <div className="text-red-400 font-mono text-sm">QUEST FAILED!</div>
                    <div className="text-red-300 font-mono text-xs">Please complete all required fields.</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2">PLAYER NAME *</label>
                  <input
                    type="text"
                    placeholder="Enter your name..."
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full bg-gray-700 border-2 border-green-500/50 rounded px-4 py-3 font-mono text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none focus:shadow-[0_0_10px_rgba(234,179,8,0.3)] transition-all duration-300"
                    disabled={formStatus === "loading"}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    placeholder="your.email@domain.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full bg-gray-700 border-2 border-green-500/50 rounded px-4 py-3 font-mono text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none focus:shadow-[0_0_10px_rgba(234,179,8,0.3)] transition-all duration-300"
                    disabled={formStatus === "loading"}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2">QUEST DETAILS *</label>
                  <textarea
                    placeholder="Describe your quest or project..."
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-gray-700 border-2 border-green-500/50 rounded px-4 py-3 font-mono text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none focus:shadow-[0_0_10px_rgba(234,179,8,0.3)] transition-all duration-300 resize-none"
                    disabled={formStatus === "loading"}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-mono border-2 border-green-400 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] disabled:opacity-50 disabled:cursor-not-allowed py-4"
                >
                  {formStatus === "loading" ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      PROCESSING QUEST...
                    </>
                  ) : (
                    <>
                      <Sword className="mr-2 h-4 w-4" />
                      [ENTER] ACCEPT QUEST
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Game Credits */}
      <footer
        className="relative z-10 border-t-4 border-green-500 bg-gray-900/90 backdrop-blur-sm py-8"
        role="contentinfo"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <Gamepad2 className="h-6 w-6 text-green-400 animate-pulse" />
                <span className="font-mono text-green-400 text-lg">GAMEHOUSE</span>
              </div>
              <span className="text-2xl">🇰🇷</span>
              <Badge className="bg-green-600 border-green-400 font-mono text-xs">ONLINE</Badge>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 font-mono text-sm">© 2024 GAMEHOUSE - RETRO GAMING REDEFINED</p>
              <p className="text-gray-500 font-mono text-xs mt-1">CRAFTED WITH ❤️ IN SEOUL, KOREA 🇰🇷 • VERSION 2.0.24</p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </div>
  )
}
