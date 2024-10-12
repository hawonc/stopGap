module.exports = {
    apps: [
      {
        name: 'server',
        script: './index.js',
        watch: true,
        ignore_watch: ['node_modules', 'logs']
      }
    ]
  };