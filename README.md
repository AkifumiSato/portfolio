# build process
* web
* storybook
* jest

# docker command
## develop
```sh
docker-compose up
```

## test
```sh
docker-compose exec web bash
npm t
```

# local command
## develop
```sh
npm run dev
```

## storybook
```sh
npm run storybook
```

## test
```sh
npm t
```

## build
### web
```sh
gatsby build
```

### storybook
```sh
npm run build-storybook
```
