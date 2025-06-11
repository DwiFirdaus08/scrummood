"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Clock, Plus } from "lucide-react"

type AgendaItem = {
  id: number
  title: string
  duration: number // in minutes
  isCompleted: boolean
  assignee: string
  notes?: string
}

export function MeetingAgenda() {
  const [agendaItems, setAgendaItems] = useState<AgendaItem[]>([
    {
      id: 1,
      title: "What did you accomplish yesterday?",
      duration: 5,
      isCompleted: true,
      assignee: "All Team Members",
    },
    {
      id: 2,
      title: "What are you working on today?",
      duration: 5,
      isCompleted: false,
      assignee: "All Team Members",
      notes: "Focus on blockers and dependencies",
    },
    {
      id: 3,
      title: "Any blockers or impediments?",
      duration: 3,
      isCompleted: false,
      assignee: "All Team Members",
    },
    {
      id: 4,
      title: "API Integration Discussion",
      duration: 2,
      isCompleted: false,
      assignee: "Mike Johnson",
      notes: "Brief discussion on authentication issues",
    },
  ])

  const toggleItemCompletion = (id: number) => {
    setAgendaItems((prev) => prev.map((item) => (item.id === id ? { ...item, isCompleted: !item.isCompleted } : item)))
  }

  const totalDuration = agendaItems.reduce((sum, item) => sum + item.duration, 0)
  const completedDuration = agendaItems.filter((item) => item.isCompleted).reduce((sum, item) => sum + item.duration, 0)

  const progressPercentage = Math.round((completedDuration / totalDuration) * 100)

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-medium">Daily Scrum Agenda</h3>
          <div className="text-sm text-gray-500 flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            <span>Total Duration: {totalDuration} minutes</span>
          </div>
        </div>
        <Button variant="outline" size="sm">
          <Plus className="mr-1 h-4 w-4" />
          Add Item
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <Progress value={progressPercentage} className="flex-1" />
        <span className="text-sm font-medium">{progressPercentage}%</span>
      </div>

      <div className="space-y-3">
        {agendaItems.map((item) => (
          <div
            key={item.id}
            className={`p-3 rounded-lg border ${
              item.isCompleted ? "bg-gray-50 border-gray-200" : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-start">
              <Checkbox
                id={`item-${item.id}`}
                checked={item.isCompleted}
                onCheckedChange={() => toggleItemCompletion(item.id)}
                className="mt-1"
              />
              <div className="ml-3 flex-1">
                <label
                  htmlFor={`item-${item.id}`}
                  className={`font-medium ${item.isCompleted ? "line-through text-gray-500" : ""}`}
                >
                  {item.title}
                </label>
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>{item.assignee}</span>
                  <span>{item.duration} min</span>
                </div>
                {item.notes && <p className="text-sm text-gray-600 mt-2 bg-gray-50 p-2 rounded">{item.notes}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
