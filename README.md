# POC - Dynamic top level await

POC Sanity Studio repository, exploring options to dynamically generate `sanity.config.ts` in order to selectively enable top level await code for CLI **dev** and **build** commands 👩‍💻

Includes example NPM run-scripts for dev, build, manifest, deploy, typegen

The shell script needs to be executable.

```
chmod +x ./sanity.config.sh
```

## Further thoughts

Manifest generation is interesting and perhaps needs further consideration as this CLI command also requires the static config.

dev (dynamic) ✅<br />
build (dynamic) ✅<br />
deploy (dynamic) ✅<br />
manifest (static) ✅ - *maybe not ideal (used anywhere beyond Canvas?)<br />
typegen (static) ✅ - *import exhaustive schema in static config
