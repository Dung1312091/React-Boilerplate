module.exports = {
    "env": {
      "es6": true,
   },
   "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
   },
    "rules": {
      "indent": [
        "error",
        2
      ],
      "linebreak-style": [
        "error",
        "unix"
      ],
      "quotes": [
        "error",
        "single"
      ],
      "semi": [
        "error",
        "always"
      ],
      "no-trailing-spaces": [
        "error", 
        { 
          "skipBlankLines": false 
        }
      ]
    },
    "parser": "babel-eslint"
  };