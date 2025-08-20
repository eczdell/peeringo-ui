'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Search, Eye } from 'lucide-react';

type Notification = {
  id: number;
  message: string;
  date: string;
  status: 'unread' | 'read';
};

const notifications: Notification[] = [
  { id: 1, message: 'Your CV has been reviewed by ABC Corp', date: '2025-08-20', status: 'unread' },
  { id: 2, message: 'New job posted: Frontend Developer at XYZ Ltd', date: '2025-08-18', status: 'read' },
];

export default function NotificationsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = notifications.filter(
    n => n.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">Notifications</h1>

      <Card className="shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Search className="w-5 h-5" />Search Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Search notifications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </CardContent>
      </Card>

      <Card className="shadow">
        <CardHeader>
          <CardTitle>Notifications ({filtered.length})</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          {filtered.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Message</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map(n => (
                  <TableRow key={n.id} className="hover:bg-muted/30">
                    <TableCell>{n.message}</TableCell>
                    <TableCell>{n.date}</TableCell>
                    <TableCell>
                      <Badge variant={n.status === 'unread' ? 'destructive' : 'default'}>
                        {n.status.toUpperCase()}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline"><Eye className="w-3 h-3" /></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : <p className="text-center py-8">No notifications found</p>}
        </CardContent>
      </Card>
    </div>
  );
}

