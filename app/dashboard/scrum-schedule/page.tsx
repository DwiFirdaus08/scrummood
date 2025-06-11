"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarPlus, Clock, Users, Video } from "lucide-react"
import { UpcomingScrums } from "@/components/upcoming-scrums"

export default function ScrumSchedulePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Scrum Schedule</h1>
        <p className="text-muted-foreground">Manage and schedule your Daily Scrum sessions</p>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
          <TabsTrigger value="schedule">Schedule New Session</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle>Today's Scrum Sessions</CardTitle>
              <CardDescription>All scheduled sessions for today</CardDescription>
            </CardHeader>
            <CardContent>
              <UpcomingScrums />
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Session</CardTitle>
                <CardDescription>Currently running Scrum session</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium text-green-800">Frontend Team Daily Scrum</h3>
                      <p className="text-sm text-green-700">Started at 9:00 AM • 15 minutes duration</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-xs text-green-700">Live</span>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-green-700 mb-2">
                    <Users className="mr-1 h-4 w-4" />5 participants
                  </div>

                  <div className="flex items-center text-sm text-green-700 mb-4">
                    <Clock className="mr-1 h-4 w-4" />
                    10 minutes elapsed
                  </div>

                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <Video className="mr-1 h-4 w-4" />
                    Join Session
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>This Week's Schedule</CardTitle>
                <CardDescription>Overview of all sessions this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h3 className="font-medium">Monday</h3>
                    <div className="text-sm text-gray-500 mt-1">
                      <div className="flex justify-between">
                        <span>Frontend Team</span>
                        <span>9:00 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Backend Team</span>
                        <span>10:00 AM</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h3 className="font-medium">Tuesday</h3>
                    <div className="text-sm text-gray-500 mt-1">
                      <div className="flex justify-between">
                        <span>Frontend Team</span>
                        <span>9:00 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Backend Team</span>
                        <span>10:00 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Design Team</span>
                        <span>11:00 AM</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h3 className="font-medium">Wednesday</h3>
                    <div className="text-sm text-gray-500 mt-1">
                      <div className="flex justify-between">
                        <span>Frontend Team</span>
                        <span>9:00 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Backend Team</span>
                        <span>10:00 AM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="schedule">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Schedule New Session</CardTitle>
                <CardDescription>Create a new Daily Scrum session</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="team">Team</Label>
                    <Select>
                      <SelectTrigger id="team">
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

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="start-time">Start Time</Label>
                      <Input id="start-time" type="time" defaultValue="09:00" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Select defaultValue="15">
                        <SelectTrigger id="duration">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">10 minutes</SelectItem>
                          <SelectItem value="15">15 minutes</SelectItem>
                          <SelectItem value="20">20 minutes</SelectItem>
                          <SelectItem value="30">30 minutes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="recurrence">Recurrence</Label>
                    <Select defaultValue="weekdays">
                      <SelectTrigger id="recurrence">
                        <SelectValue placeholder="Select recurrence" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="once">One time only</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekdays">Weekdays</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="participants">Participants</Label>
                    <Select>
                      <SelectTrigger id="participants">
                        <SelectValue placeholder="Select participants" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All team members</SelectItem>
                        <SelectItem value="developers">Developers only</SelectItem>
                        <SelectItem value="custom">Custom selection</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notification">Notification</Label>
                    <Select defaultValue="15">
                      <SelectTrigger id="notification">
                        <SelectValue placeholder="Select notification time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 minutes before</SelectItem>
                        <SelectItem value="10">10 minutes before</SelectItem>
                        <SelectItem value="15">15 minutes before</SelectItem>
                        <SelectItem value="30">30 minutes before</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    <CalendarPlus className="mr-2 h-4 w-4" />
                    Schedule Session
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Select Date</CardTitle>
                <CardDescription>Choose when to schedule your session</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
