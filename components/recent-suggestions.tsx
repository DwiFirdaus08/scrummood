"use client"

import { Button } from "@/components/ui/button"
import { Coffee, MessageCircle, Wind, ThumbsUp, ThumbsDown } from "lucide-react"

type Suggestion = {
  id: number
  type: "break" | "discussion" | "breathing" | "game"
  content: string
  time: string
}

const suggestions: Suggestion[] = [
  {
    id: 1,
    type: "break",
    content: "Team stress levels are rising. Consider taking a 5-minute break.",
    time: "10 minutes ago",
  },
  {
    id: 2,
    type: "discussion",
    content:
      "Some team members seem frustrated with the current task distribution. Open a discussion about workload balance.",
    time: "25 minutes ago",
  },
  {
    id: 3,
    type: "breathing",
    content: "Try a 2-minute breathing exercise to reduce tension before continuing the meeting.",
    time: "40 minutes ago",
  },
  {
    id: 4,
    type: "game",
    content: "Team energy is low. Consider a quick energizer activity to boost mood.",
    time: "1 hour ago",
  },
]

const getSuggestionIcon = (type: Suggestion["type"]) => {
  switch (type) {
    case "break":
      return <Coffee className="h-5 w-5 text-orange-500" />
    case "discussion":
      return <MessageCircle className="h-5 w-5 text-blue-500" />
    case "breathing":
      return <Wind className="h-5 w-5 text-teal-500" />
    case "game":
      return <div className="h-5 w-5 text-purple-500 flex items-center justify-center">🎮</div>
  }
}

export function RecentSuggestions() {
  return (
    <div className="space-y-4">
      {suggestions.map((suggestion) => (
        <div key={suggestion.id} className="flex space-x-4 p-3 bg-gray-50 rounded-lg">
          <div className="mt-0.5">{getSuggestionIcon(suggestion.type)}</div>
          <div className="flex-1 space-y-1">
            <p className="text-sm">{suggestion.content}</p>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">{suggestion.time}</p>
              <div className="flex space-x-1">
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <ThumbsUp className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <ThumbsDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
