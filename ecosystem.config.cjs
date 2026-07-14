const path = require("path");

module.exports = {
  apps: [
    {
      name: "taxi-site",
      cwd: path.resolve(__dirname),
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3021",
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 3021,
      },
    },
  ],
};
