# Angular < 16

# Angular History (reminder)

- Angular 1 AKA "AngularJS" (significantly different from)  
- Angular 2 -> 2016. (V3 is skipped)
- ...  
- Angular 14 & 15 -> 2022. Introduced **Standalone Components**.
- Angular 16 -> 2023. Introduced **Signals**.

# Zoneless Mode (Angular v21+)

> Note: What you learn throughout the course will apply to Angular
in general, no matter the version, but to follow along, create
new projects like this:

```bash
# Angular v21+
# This will give you a project in "zoneless" mode
ng new first-angular-app --no-zoneless
```

Note 1: The following sections inside  
`angular-spring-boot/angular_training/00_Angular_Legacy`
will not use standalone components and signals.  
Note 2: This Legacy sections do NOT use Angular's
"Strict Mode". You should create projects with the
`--standalone=false` flag:
```bash
ng new my-project --standalone false
```