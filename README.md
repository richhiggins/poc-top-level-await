# POC - Dynamic top level await

POC Sanity Studio repository, exploring options to dynamically generate `sanity.config.ts` in order to selectively enable top level await code for CLI **dev** and **build** commands 👩‍💻

Includes example NPM run-scripts for development, build, deploy, typegen

The following shell scripts must be executable.

```
chmod +x ./sanity.config.dynamic.sh
chmod +x ./sanity.config.static.sh
```

## Further thoughts

Shell is lightening quick and seems to work, but try using node scripts in the same way for easier code re-use and typing.
