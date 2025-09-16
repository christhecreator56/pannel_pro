"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Send, MessageCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

interface Message {
  id: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
}

interface ChatInterfaceProps {
  onAssessmentComplete: (data: any) => void
}

export default function ChatInterface({ onAssessmentComplete }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "assistant",
      content:
        "Hello! I'm your AI assistant for car damage assessment. Please describe your car damage in detail, including the location, type of damage, and severity. I'll analyze your description and provide a comprehensive assessment.",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const simulateAnalysis = (description: string) => {
    // Simulate AI analysis based on text description
    const damages = [
      { type: "Scratch", severity: "Minor", location: "Front bumper", confidence: 95 },
      { type: "Dent", severity: "Moderate", location: "Driver door", confidence: 88 },
      { type: "Paint damage", severity: "Minor", location: "Rear panel", confidence: 92 },
    ]

    return {
      description,
      damages,
      overallSeverity: "Moderate",
      estimatedCost: "₹1,00,000 - ₹1,50,000",
      summary: `Based on your description, I've identified ${damages.length} areas of damage. The overall severity is moderate, with damages including scratches on the front bumper, a dent on the driver door, and paint damage on the rear panel. Estimated repair cost is between ₹1,00,000 - ₹1,50,000.`,
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Scroll to bottom after adding user message
    setTimeout(scrollToBottom, 100)

    // Simulate AI processing time
    setTimeout(() => {
      // Check if the message contains damage description keywords
      const damageKeywords = [
        "scratch",
        "dent",
        "damage",
        "broken",
        "cracked",
        "bent",
        "paint",
        "bumper",
        "door",
        "hood",
        "fender",
      ]
      const containsDamageDescription = damageKeywords.some((keyword) =>
        userMessage.content.toLowerCase().includes(keyword),
      )

      if (containsDamageDescription) {
        // Generate assessment
        const analysisResult = simulateAnalysis(userMessage.content)

        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: "assistant",
          content: analysisResult.summary,
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, assistantMessage])
        onAssessmentComplete(analysisResult)

        toast({
          title: "Analysis Complete",
          description: "Your car damage assessment is ready.",
        })
      } else {
        // Ask for more specific damage information
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: "assistant",
          content:
            "I'd be happy to help assess your car damage! Please provide more specific details about the damage, such as:\n\n• What type of damage is it? (scratch, dent, crack, etc.)\n• Where is it located on your car?\n• How severe does it appear?\n• When did the damage occur?\n\nThe more details you provide, the more accurate my assessment will be.",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, assistantMessage])
      }

      setIsLoading(false)
      setTimeout(scrollToBottom, 100)
    }, 2000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <Card className="h-[600px] flex flex-col shadow-xl border-0">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg p-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <MessageCircle className="h-5 w-5" />
          AI Damage Assessment Chat
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-0">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg p-2.5 ${
                  message.type === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                }`}
              >
                <p className="text-sm whitespace-pre-line">{message.content}</p>
                <span className="text-xs opacity-70 mt-1 block">{message.timestamp.toLocaleTimeString()}</span>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-2.5 flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="text-sm">Analyzing your description...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t bg-gray-50">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Describe your car damage in detail..."
              onKeyPress={handleKeyPress}
              className="flex-1 text-sm"
              disabled={isLoading}
            />
            <Button onClick={handleSendMessage} disabled={!inputValue.trim() || isLoading} size="sm">
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Be specific about damage type, location, and severity for better assessment
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
