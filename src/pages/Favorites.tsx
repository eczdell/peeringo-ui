'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Search, X } from 'lucide-react';

type Favorite = {
  id: number;
  name: string;
  type: string;
  dateAdded: string;
};

const favorites: Favorite[] = [
  { id: 1, name: 'Grand Palace Hotel', type: 'Hotel', dateAdded: '2025-08-20' },
  { id: 2, name: 'ABC Corp Job', type: 'Job', dateAdded: '2025-08-19' },
];

export default function FavoritesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = favorites.filter(
    f => f.name.toLowerCase().includes(searchTerm.toLowerCase()) || f.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">Favorites</h1>

      <Card className="shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Search className="w-5 h-5" />Search Favorites</CardTitle>
        </CardHeader>
        <CardContent>
          <Input placeholder="Search favorites..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </CardContent>
      </Card>

      <Card className="shadow">
        <CardHeader>
          <CardTitle>Favorites ({filtered.length})</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          {filtered.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date Added</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map(f => (
                  <TableRow key={f.id} className="hover:bg-muted/30">
                    <TableCell>{f.name}</TableCell>
                    <TableCell>{f.type}</TableCell>
                    <TableCell>{f.dateAdded}</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline"><X className="w-3 h-3 text-red-500" /></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : <p className="text-center py-8">No favorites found</p>}
        </CardContent>
      </Card>
    </div>
  );
}

