"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Smile } from "lucide-react"

type Message = {
  id: number
  sender: string
  senderInitials: string
  avatar: string
  content: string
  timestamp: string
  isSystem?: boolean
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "System",
      senderInitials: "SYS",
      avatar: "",
      content: "Welcome to the Frontend Team Daily Scrum chat! The session will begin shortly.",
      timestamp: "8:55 AM",
      isSystem: true,
    },
    {
      id: 2,
      sender: "John Doe",
      senderInitials: "JD",
      avatar: "",
      content: "Good morning everyone! I'm ready for today's session.",
      timestamp: "8:57 AM",
    },
    {
      id: 3,
      sender: "Jane Smith",
      senderInitials: "JS",
      avatar: "",
      content: "Morning! I've completed the login page design yesterday.",
      timestamp: "9:00 AM",
    },
    {
      id: 4,
      sender: "System",
      senderInitials: "SYS",
      avatar: "",
      content: "The team's mood seems positive today! Great start to the session.",
      timestamp: "9:02 AM",
      isSystem: true,
    },
    {
      id: 5,
      sender: "Mike Johnson",
      senderInitials: "MJ",
      avatar: "",
      content: "I'm still working on the API integration. Having some issues with authentication.",
      timestamp: "9:03 AM",
    },
    {
      id: 6,
      sender: "Sarah Williams",
      senderInitials: "SW",
      avatar: "",
      content: "I can help with that Mike. Let's discuss after the meeting.",
      timestamp: "9:04 AM",
    },
    {
      id: 7,
      sender: "System",
      senderInitials: "SYS",
      avatar: "",
      content:
        "Suggestion: Mike's stress level seems elevated. Consider offering assistance with the authentication issue.",
      timestamp: "9:05 AM",
      isSystem: true,
    },
  ])

  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const message: Message = {
      id: messages.length + 1,
      sender: "John Doe",
      senderInitials: "JD",
      avatar: "",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true }),
    }

    setMessages([...messages, message])
    setNewMessage("")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Team Chat</h1>
        <p className="text-muted-foreground">Communicate with your team during Scrum sessions</p>
      </div>

      <Card className="h-[calc(100vh-220px)]">
        <CardHeader>
          <CardTitle>Frontend Team Daily Scrum</CardTitle>
          <CardDescription>Session started at 9:00 AM • 5 participants • Active</CardDescription>
        </CardHeader>
        <CardContent className="p-0 flex flex-col h-[calc(100%-5rem)]">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isSystem ? "justify-center" : "gap-3"}`}>
                  {message.isSystem ? (
                    <div className="inline-block px-4 py-2 bg-blue-50 text-blue-800 text-sm rounded-lg max-w-[80%]">
                      <p>{message.content}</p>
                      <p className="text-xs text-blue-600 mt-1">{message.timestamp}</p>
                    </div>
                  ) : (
                    <>
                      <Avatar>
                        <AvatarImage src={message.avatar || "/placeholder.svg"} alt={message.sender} />
                        <AvatarFallback>{message.senderInitials}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <div className="flex items-baseline gap-2">
                          <span className="font-medium">{message.sender}</span>
                          <span className="text-xs text-gray-500">{message.timestamp}</span>
                        </div>
                        <div className="bg-gray-100 px-3 py-2 rounded-lg mt-1 text-sm">{message.content}</div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 border-t">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Button type="button" variant="ghost" size="icon" className="flex-shrink-0">
                <Smile className="h-5 w-5" />
              </Button>
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1"
              />
              <Button
                type="submit"
                className="flex-shrink-0 bg-teal-600 hover:bg-teal-700"
                disabled={!newMessage.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
