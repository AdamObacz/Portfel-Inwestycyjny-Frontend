const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist-server');

function fixFile(file) {
  const p = path.join(dist, file);
  if (!fs.existsSync(p)) return;
  let s = fs.readFileSync(p, 'utf8');
  s = s.replace(/from "\.\/db"/g, 'from "./db.js"');
  s = s.replace(/from "\.\/redis"/g, 'from "./redis.js"');
  s = s.replace(/from "\.\/routes\/users"/g, 'from "./routes/users.js"');
  fs.writeFileSync(p, s, 'utf8');
}

['app.js','server.js','app.cjs','server.cjs'].forEach(fixFile);
// also patch files under routes
const routesDir = path.join(dist, 'routes');
if (fs.existsSync(routesDir)) {
  fs.readdirSync(routesDir).forEach(f => {
    const p = path.join(routesDir, f);
    let s = fs.readFileSync(p, 'utf8');
    s = s.replace(/from "\.\/.\.\/db"/g, 'from "../db.js"');
    fs.writeFileSync(p, s, 'utf8');
  });
}

console.log('Patched dist-server imports');
