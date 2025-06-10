# POC - Dynamic top level await

POC Sanity Studio repository, exploring options to dynamically generate `sanity.config.ts` in order to selectively enable top level await code for CLI **dev** and **build** commands 👩‍💻

Includes example NPM run-scripts for dev, build, manifest, deploy, typegen

The following shell scripts must be executable.

```
chmod +x ./sanity.config.dynamic.sh
chmod +x ./sanity.config.static.sh
```

## Further thoughts

Shell is lightening quick and seems to work, but could try using node scripts in the same way for easier code re-use and typing.

<!--
    dev (dynamic) ✅
    build (dynamic) ✅
    manifest (static) ✅ - *maybe not ideal? (dashboard context)
    deploy (dynamic) ✅
    typegen (static) ✅ - *exhaustive schema in static config
-->
