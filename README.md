# React + Vite
API used is from https://openweathermap.org. To obtain API key, you can create an account, and go to `My API keys` or (https://home.openweathermap.org/api_keys) and copy one active key. It might take some minutes until a generated API key is valid.

How to run locally: 
- Open Integrated Terminal at folder part2.18_2.20
- Run  `npm install`
- Run  `npm install axios`
- Run  `npm install json-server --save-dev`
- Run `npm run server`
- Open/split another Integrated Terminal at folder part2.18_2.20
  

- NB: Use an environment variable to save the key. Assuming your API key is `aa26841n3n4v41m34rv0`, you can set it by:
    ```
    export VITE_SOME_KEY=aa26841n3n4v41m34rv0 && npm run dev // For Linux/macOS Bash
    ($env:VITE_SOME_KEY="5f35b0af8dff8a1146f933d450039052
") -and (npm run dev) // For Windows PowerShell
    set "VITE_SOME_KEY=5f35b0af8dff8a1146f933d450039052" && npm run dev // For Windows cmd.exe
    ```
    Or alternatively, create a new file in the root of the folder name `.env`, put `VITE_SOME_KEY=aa26841n3n4v41m34rv0` there
- Finally run `npm run dev` and go to your localhost

- Result
<img src=".\public\countryApp.gif" width="800" height="300">
[![Watch the video](.\public\countryapp.png)](.\public\countryglance.mp4)
