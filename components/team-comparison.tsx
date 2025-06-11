"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function TeamComparison() {
  const [team1, setTeam1] = useState("frontend")
  const [team2, setTeam2] = useState("backend")
  const [timeframe, setTimeframe] = useState("week")

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="grid grid-cols-2 gap-4 md:flex md:items-center">
          <div className="space-y-2">
            <label className="text-sm font-medium">Team 1</label>
            <Select value={team1} onValueChange={setTeam1}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select team" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="frontend">Frontend Team</SelectItem>
                <SelectItem value="backend">Backend Team</SelectItem>
                <SelectItem value="design">Design Team</SelectItem>
                <SelectItem value="qa">QA Team</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Team 2</label>
            <Select value={team2} onValueChange={setTeam2}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select team" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="frontend">Frontend Team</SelectItem>
                <SelectItem value="backend">Backend Team</SelectItem>
                <SelectItem value="design">Design Team</SelectItem>
                <SelectItem value="qa">QA Team</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Timeframe</label>
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-4">Frontend Team</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Happy</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "65%" }}></div>
              </div>
              <span>65%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Neutral</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "20%" }}></div>
              </div>
              <span>20%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Stressed</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "10%" }}></div>
              </div>
              <span>10%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Sad</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: "3%" }}></div>
              </div>
              <span>3%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Angry</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "2%" }}></div>
              </div>
              <span>2%</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-4">Backend Team</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Happy</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "45%" }}></div>
              </div>
              <span>45%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Neutral</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "30%" }}></div>
              </div>
              <span>30%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Stressed</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "15%" }}></div>
              </div>
              <span>15%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Sad</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: "5%" }}></div>
              </div>
              <span>5%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Angry</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "5%" }}></div>
              </div>
              <span>5%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="font-medium text-blue-800 mb-2">Comparison Insights</h3>
        <div className="space-y-2 text-sm text-blue-700">
          <p>
            <span className="font-medium">Frontend Team</span> shows 20% higher happiness levels compared to{" "}
            <span className="font-medium">Backend Team</span>.
          </p>
          <p>
            <span className="font-medium">Backend Team</span> shows 5% higher stress levels, potentially related to
            recent database migration issues.
          </p>
          <p>Both teams show similar levels of anger, suggesting no significant conflicts in either team.</p>
        </div>
      </div>
    </div>
  )
}
