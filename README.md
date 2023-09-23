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
      - kald til api i form af login og signup
      - Masser af knapper på forskellige sider

## Screenshots

<div style="display: flex; gap: 10px; width: 100%">
<div style="display: flex; justify-content: center; align-items: center; flex-direction: column; max-width: 200px;">
<h6>Home (Jonatan)</h6>
<img src="./.github/assets/screenshots/Home.png" alt="Home" width="200px" />
</div>
<div style="display: flex; justify-content: center; align-items: center; flex-direction: column; max-width: 200px;">
<h6>Login (Isaac)</h6>
<img src="./.github/assets/screenshots/Login.png" alt="Login" width="200px" />
</div><div style="display: flex; justify-content: center; align-items: center; flex-direction: column; max-width: 200px;">
<h6>Signup (Isaac)</h6>
<img src="./.github/assets/screenshots/Signup.png" alt="Signup" width="200px" />
</div>
</div>




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
