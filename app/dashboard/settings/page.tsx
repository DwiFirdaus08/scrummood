"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Lock, User, Users } from "lucide-react"

export default function SettingsPage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [emotionTrackingEnabled, setEmotionTrackingEnabled] = useState(true)
  const [voiceAnalysisEnabled, setVoiceAnalysisEnabled] = useState(true)
  const [facialAnalysisEnabled, setFacialAnalysisEnabled] = useState(false)
  const [journalAnalysisEnabled, setJournalAnalysisEnabled] = useState(true)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account and application preferences</p>
      </div>

      <Tabs defaultValue="profile">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="profile">
            <User className="mr-2 h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="privacy">
            <Lock className="mr-2 h-4 w-4" />
            Privacy
          </TabsTrigger>
          <TabsTrigger value="teams">
            <Users className="mr-2 h-4 w-4" />
            Teams
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder.svg" alt="Profile" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">
                      Change Avatar
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="John Doe" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Select defaultValue="member">
                      <SelectTrigger id="role">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="member">Team Member</SelectItem>
                        <SelectItem value="facilitator">Facilitator</SelectItem>
                        <SelectItem value="manager">Manager</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="utc-8">
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                        <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                        <SelectItem value="utc+0">UTC</SelectItem>
                        <SelectItem value="utc+1">Central European Time (UTC+1)</SelectItem>
                        <SelectItem value="utc+8">China Standard Time (UTC+8)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Save Changes</Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Security</CardTitle>
                <CardDescription>Update your password and security settings</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>

                  <div className="pt-4 space-y-4">
                    <h3 className="font-medium">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="2fa">Enable 2FA</Label>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                      </div>
                      <Switch id="2fa" />
                    </div>
                  </div>

                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Update Security Settings</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose how and when you want to be notified</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">General Notifications</h3>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="all-notifications">Enable All Notifications</Label>
                    <p className="text-sm text-muted-foreground">Master toggle for all notifications</p>
                  </div>
                  <Switch
                    id="all-notifications"
                    checked={notificationsEnabled}
                    onCheckedChange={setNotificationsEnabled}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="scrum-reminders">Scrum Session Reminders</Label>
                    <p className="text-sm text-muted-foreground">Get notified before scheduled sessions</p>
                  </div>
                  <Switch id="scrum-reminders" disabled={!notificationsEnabled} defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="emotion-alerts">Emotion Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive alerts when team emotions change significantly
                    </p>
                  </div>
                  <Switch id="emotion-alerts" disabled={!notificationsEnabled} defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="suggestion-notifications">AI Suggestions</Label>
                    <p className="text-sm text-muted-foreground">Get notified about AI-generated suggestions</p>
                  </div>
                  <Switch id="suggestion-notifications" disabled={!notificationsEnabled} defaultChecked />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Delivery Methods</h3>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="in-app">In-App Notifications</Label>
                    <p className="text-sm text-muted-foreground">Show notifications within the application</p>
                  </div>
                  <Switch id="in-app" disabled={!notificationsEnabled} defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Send notifications to your email</p>
                  </div>
                  <Switch id="email" disabled={!notificationsEnabled} defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="desktop">Desktop Notifications</Label>
                    <p className="text-sm text-muted-foreground">Show notifications on your desktop</p>
                  </div>
                  <Switch id="desktop" disabled={!notificationsEnabled} defaultChecked />
                </div>
              </div>

              <Button className="bg-teal-600 hover:bg-teal-700">Save Notification Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>Control how your data is collected and used</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Emotion Tracking</h3>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="emotion-tracking">Enable Emotion Tracking</Label>
                    <p className="text-sm text-muted-foreground">Allow the system to track your emotional state</p>
                  </div>
                  <Switch
                    id="emotion-tracking"
                    checked={emotionTrackingEnabled}
                    onCheckedChange={setEmotionTrackingEnabled}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="text-analysis">Text Analysis</Label>
                    <p className="text-sm text-muted-foreground">Analyze emotions from your text messages and chat</p>
                  </div>
                  <Switch id="text-analysis" disabled={!emotionTrackingEnabled} defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="voice-analysis">Voice Analysis</Label>
                    <p className="text-sm text-muted-foreground">Analyze emotions from your voice during sessions</p>
                  </div>
                  <Switch
                    id="voice-analysis"
                    checked={voiceAnalysisEnabled}
                    onCheckedChange={setVoiceAnalysisEnabled}
                    disabled={!emotionTrackingEnabled}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="facial-analysis">Facial Expression Analysis</Label>
                    <p className="text-sm text-muted-foreground">
                      Analyze emotions from your facial expressions (requires camera)
                    </p>
                  </div>
                  <Switch
                    id="facial-analysis"
                    checked={facialAnalysisEnabled}
                    onCheckedChange={setFacialAnalysisEnabled}
                    disabled={!emotionTrackingEnabled}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Journal Privacy</h3>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="journal-analysis">Journal Analysis</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow AI to analyze your journal entries for emotional insights
                    </p>
                  </div>
                  <Switch
                    id="journal-analysis"
                    checked={journalAnalysisEnabled}
                    onCheckedChange={setJournalAnalysisEnabled}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="journal-sharing">Journal Sharing</Label>
                    <p className="text-sm text-muted-foreground">Share anonymized journal insights with your team</p>
                  </div>
                  <Switch id="journal-sharing" disabled={!journalAnalysisEnabled} defaultChecked={false} />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Data Retention</h3>

                <div className="space-y-2">
                  <Label htmlFor="data-retention">Keep Emotion Data For</Label>
                  <Select defaultValue="90">
                    <SelectTrigger id="data-retention">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="90">90 days</SelectItem>
                      <SelectItem value="180">6 months</SelectItem>
                      <SelectItem value="365">1 year</SelectItem>
                      <SelectItem value="forever">Indefinitely</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                  Delete All My Data
                </Button>
              </div>

              <Button className="bg-teal-600 hover:bg-teal-700">Save Privacy Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="teams">
          <Card>
            <CardHeader>
              <CardTitle>Team Management</CardTitle>
              <CardDescription>Manage your teams and team memberships</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Your Teams</h3>

                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Frontend Team</h4>
                        <p className="text-sm text-gray-500">5 members • You are a member</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Backend Team</h4>
                        <p className="text-sm text-gray-500">6 members • You are a facilitator</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Design Team</h4>
                        <p className="text-sm text-gray-500">4 members • You are a member</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Create New Team</h3>

                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="team-name">Team Name</Label>
                    <Input id="team-name" placeholder="Enter team name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="team-description">Description</Label>
                    <Input id="team-description" placeholder="Brief team description" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="team-members">Initial Members</Label>
                    <Input id="team-members" placeholder="Enter email addresses, separated by commas" />
                  </div>

                  <Button className="bg-teal-600 hover:bg-teal-700">Create Team</Button>
                </form>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Team Invitations</h3>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-blue-800">QA Team</h4>
                      <p className="text-sm text-blue-700">Invited by: Sarah Williams • 2 days ago</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                        Decline
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Accept
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
