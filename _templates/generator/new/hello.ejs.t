---
to: _templates/<%= name %>/<%= action || 'new' %>/hello.ejs.t
message: |
  --nameには<%= name %>が入りました。
---
---
to: app/hello.js
---
const hello = ```
Hello!
This is your first hygen template.

Learn what it can do here:

https://github.com/jondot/hygen
```

console.log(hello)


