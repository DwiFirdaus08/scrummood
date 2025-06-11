"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Target, Lightbulb, Heart, MessageCircle, TrendingUp } from "lucide-react"

interface PersonalSuggestionsProps {
  source?: "meeting" | "journal" | "all"
}

export function PersonalSuggestions({ source = "all" }: PersonalSuggestionsProps) {
  const [suggestions] = useState({
    actionItems: [
      {
        id: 1,
        title: "Practice active listening",
        description: "Based on meeting analysis, try to ask more clarifying questions during discussions",
        priority: "high",
        source: "meeting",
        completed: false,
      },
      {
        id: 2,
        title: "Take regular breaks",
        description: "Your journal entries show stress patterns. Schedule 5-minute breaks every hour",
        priority: "medium",
        source: "journal",
        completed: false,
      },
      {
        id: 3,
        title: "Share ideas more confidently",
        description: "You have great insights but seem hesitant to share them in meetings",
        priority: "high",
        source: "meeting",
        completed: false,
      },
    ],
    strengths: [
      {
        id: 4,
        title: "Excellent problem-solving skills",
        description: "You consistently provide creative solutions during team discussions",
        source: "meeting",
      },
      {
        id: 5,
        title: "Positive attitude maintenance",
        description: "Your journal shows resilience and optimism even during challenging times",
        source: "journal",
      },
    ],
    completed: [
      {
        id: 6,
        title: "Improved meeting participation",
        description: "Great progress in speaking up during team meetings",
        completedDate: "2024-01-10",
        source: "meeting",
      },
    ],
  })

  const filteredSuggestions = {
    actionItems: suggestions.actionItems.filter((s) => source === "all" || s.source === source),
    strengths: suggestions.strengths.filter((s) => source === "all" || s.source === source),
    completed: suggestions.completed.filter((s) => source === "all" || s.source === source),
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getSourceIcon = (source: string) => {
    switch (source) {
      case "meeting":
        return <MessageCircle className="h-4 w-4" />
      case "journal":
        return <Heart className="h-4 w-4" />
      default:
        return <Lightbulb className="h-4 w-4" />
    }
  }

  return (
    <Tabs defaultValue="action-items" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="action-items" className="flex items-center gap-2">
          <Target className="h-4 w-4" />
          Action Items ({filteredSuggestions.actionItems.length})
        </TabsTrigger>
        <TabsTrigger value="strengths" className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4" />
          Strengths ({filteredSuggestions.strengths.length})
        </TabsTrigger>
        <TabsTrigger value="completed" className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4" />
          Completed ({filteredSuggestions.completed.length})
        </TabsTrigger>
      </TabsList>

      <TabsContent value="action-items" className="space-y-4">
        {filteredSuggestions.actionItems.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Target className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No action items from {source === "all" ? "any source" : source}</p>
          </div>
        ) : (
          filteredSuggestions.actionItems.map((item) => (
            <Card key={item.id} className="border-l-4 border-l-blue-500">
              <CardContent className="pt-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {getSourceIcon(item.source)}
                      <h3 className="font-medium">{item.title}</h3>
                      <Badge className={getPriorityColor(item.priority)}>{item.priority}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        From {item.source}
                      </Badge>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Mark Done
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </TabsContent>

      <TabsContent value="strengths" className="space-y-4">
        {filteredSuggestions.strengths.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No strengths identified from {source === "all" ? "any source" : source}</p>
          </div>
        ) : (
          filteredSuggestions.strengths.map((item) => (
            <Card key={item.id} className="border-l-4 border-l-green-500">
              <CardContent className="pt-4">
                <div className="flex items-start gap-2">
                  {getSourceIcon(item.source)}
                  <div className="flex-1">
                    <h3 className="font-medium text-green-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    <Badge variant="outline" className="text-xs">
                      From {item.source}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </TabsContent>

      <TabsContent value="completed" className="space-y-4">
        {filteredSuggestions.completed.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <CheckCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No completed items from {source === "all" ? "any source" : source}</p>
          </div>
        ) : (
          filteredSuggestions.completed.map((item) => (
            <Card key={item.id} className="border-l-4 border-l-gray-400 opacity-75">
              <CardContent className="pt-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="font-medium line-through text-gray-600">{item.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{item.description}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        From {item.source}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Completed {item.completedDate}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </TabsContent>
    </Tabs>
  )
}
