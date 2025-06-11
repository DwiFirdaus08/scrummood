"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function JournalAnalysis() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="trends">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="trends">Emotional Trends</TabsTrigger>
          <TabsTrigger value="insights">Personal Insights</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>

        <TabsContent value="trends" className="mt-4">
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Monthly Emotion Trends</h3>
              <div className="h-60 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Emotion trend chart would appear here</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2">Most Common Emotions</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-sm">Happy</span>
                      </div>
                      <span className="text-sm">45%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <span className="text-sm">Neutral</span>
                      </div>
                      <span className="text-sm">30%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <span className="text-sm">Stressed</span>
                      </div>
                      <span className="text-sm">15%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2">Emotional Triggers</h3>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                      Deadlines (stress)
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                      Technical issues (frustration)
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      Team collaboration (happiness)
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-gray-500 mr-2"></div>
                      Unclear requirements (confusion)
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="insights" className="mt-4">
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Emotional Patterns</h3>
              <p className="text-sm">
                Your journal entries show that you tend to feel most positive at the beginning of the week, with stress
                levels gradually increasing as the week progresses. Your emotional state is strongly influenced by
                project deadlines and team dynamics.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Communication Style</h3>
              <p className="text-sm">
                Your reflections indicate that you communicate most effectively when you feel heard and valued. You tend
                to be more reserved when feeling stressed, which might impact your participation in Scrum sessions.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Stress Response</h3>
              <p className="text-sm">
                When under pressure, your journal entries show that you focus more on technical details and
                problem-solving. This can be a strength, but may sometimes lead to overlooking the emotional aspects of
                team collaboration.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="recommendations" className="mt-4">
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-medium text-green-800 mb-2">Stress Management</h3>
              <p className="text-sm text-green-700 mb-2">
                Based on your journal patterns, consider implementing these techniques:
              </p>
              <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
                <li>Take short breaks before important meetings</li>
                <li>Practice 2-minute breathing exercises when feeling overwhelmed</li>
                <li>Schedule buffer time between meetings to process emotions</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">Communication Enhancement</h3>
              <p className="text-sm text-blue-700 mb-2">To improve your communication during Scrum sessions:</p>
              <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
                <li>Prepare key points before meetings to reduce anxiety</li>
                <li>Use "I" statements when expressing concerns</li>
                <li>Ask clarifying questions when feeling uncertain</li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <h3 className="font-medium text-purple-800 mb-2">Team Dynamics</h3>
              <p className="text-sm text-purple-700 mb-2">To contribute to a positive team environment:</p>
              <ul className="list-disc list-inside text-sm text-purple-700 space-y-1">
                <li>Acknowledge team members' contributions</li>
                <li>Share your emotional state when appropriate</li>
                <li>Suggest short team-building activities when tension is high</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
