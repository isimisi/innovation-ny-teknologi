# Innovation og Nyteknologi

## Instruktioner

```
yarn install
```

```
yarn start
```

## Who made what
- Jonatan
    - App/Screens/HomeScreen.tsx
        - Fetcher data fra vores api og giver dataen til Home komponentet (kald til api + 2 Views)
    - App/Components/Home
        - Alt i denne folder
        - Inkluderer:
            - Search - Mangler funktionalitet (4 Views + 3 knapper)
            - ListItem - Kontorerne som vises til klienten (3 Views)
            - index - Samling af de to komponenter (3 Views)


- Isaac
    - Alt andet


### TODO

- [ ] validate input before sending to api
- [ ] error handling på alle input
- [ ] clear input
- [ ] transition mellem screens
- [ ] forgot password
- [ ] App screen
    - [x] Bottom navigation + slide view
    - [ ] main search
    - [ ] favorite
    - [ ] history
    - [ ] account
