'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Search, Trash2 } from 'lucide-react';

type Review = {
  id: number;
  user: string;
  comment: string;
  rating: number;
  date: string;
};

const reviews: Review[] = [
  { id: 1, user: 'Alice', comment: 'Great CV service', rating: 5, date: '2025-08-20' },
  { id: 2, user: 'Bob', comment: 'Job portal is very helpful', rating: 4, date: '2025-08-19' },
];

export default function ReviewsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = reviews.filter(
    r => r.user.toLowerCase().includes(searchTerm.toLowerCase()) || r.comment.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">Reviews</h1>

      <Card className="shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Search className="w-5 h-5" />Search Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <Input placeholder="Search reviews..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </CardContent>
      </Card>

      <Card className="shadow">
        <CardHeader>
          <CardTitle>Reviews ({filtered.length})</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          {filtered.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Comment</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map(r => (
                  <TableRow key={r.id} className="hover:bg-muted/30">
                    <TableCell>{r.user}</TableCell>
                    <TableCell>{r.comment}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{r.rating} ★</Badge>
                    </TableCell>
                    <TableCell>{r.date}</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline"><Trash2 className="w-3 h-3 text-red-500" /></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : <p className="text-center py-8">No reviews found</p>}
        </CardContent>
      </Card>
    </div>
  );
}

