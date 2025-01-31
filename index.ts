import Database from 'bun:sqlite';
import { JSONFilePreset } from 'lowdb/node';

const db = new Database('db/sqlite.db');

// lowdb表的结构，你需要将这里修改为lowdb的结构
interface List{
  id: string,
  title: string,
}
// sqlite表的结构，你需要将这里修改为lowdb的结构
try {
  db.prepare(`
    CREATE TABLE list (
      id TEXT KEY,
      title TEXT,
    )
  `).run();
} catch (_) {}

const lowdb = await JSONFilePreset<List[]>('db/list.json', []);
lowdb.read();
const ls=lowdb.data;
for(const item of ls){
  // 注意修改这里的插入值
  const stmt = db.prepare("INSERT INTO list (id, title) VALUES (?, ?)");
  stmt.run(item.id, item.title);
}
