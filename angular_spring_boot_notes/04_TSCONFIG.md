# FIX for TS1056 "Accessors are only available when targetting ECMAScript 5 and higher."

```bash
tsc --noEmitOnError --target ES2017 --module commonjs 03_classes.ts
# --target = {ES5, ES2015, ES2020}
node 03_classes.js

# If you want the output in a separate folder:
tsc --noEmitOnError --target ES2017 --module commonjs --strict --outDir dist MyClass.ts

node dist/MyClass.js
```

# The `tsconfig.json` File

```bash
cd /my/workspace/typescript_training
tsc --init
```

Then set:
```json
{
    "compilerOptions" : {
        "noEmitOnError" : true,
        "target" : "ES2017",
        "module" : "commonjs",
        "strict" : true,
        "onDir" : "./dist"
    }
}
```

Verify that these compiler configurations are being taken
into account:
Now, you can simply run:
```bash
tsc --showConfig
{
    "compilerOptions": {
        "target": "es2017",
        "module": "commonjs",
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "skipLibCheck": true,
        "noEmitOnError": true,
        "outDir": "./dist"
    },
    "files": [
        "./00_hello_world.ts",
        "./01_sample_types.ts",
        "./02_loops_arrays.ts",
        "./03_classes.ts"
    ],
    "exclude": [
        "./dist"
    ]
}
```

Then, simply run:
```bash
tsc # That's it.
node dist/MyClass.js
```

# Clean the House First

```bash
tsc --build --clean
# Compile all *.ts files
tsc

# Run
node dist/MyClass.js
```