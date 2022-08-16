# homepage_table
The project was created to practice creating tabeles in HTML

## Demo:
https://agata-szwerbel.github.io/homepage_table/

### Description:
You can find here a lot of information about my travels. I put information in a HTML tabel.

### Preview:
 [![Przechwytywanie.png](https://i.postimg.cc/13g52GmF/Przechwytywanie.png)](https://postimg.cc/VJ88bbbs)
 
 ### Used technologies:
- HTML
- CSS
- JavaScript

### Part of the code:
```javascript
{
        const button = document.querySelector(".js-button");
        const site = document.querySelector(".site");
        const themeName = document.querySelector(".js-themeName");

        button.addEventListener("click", () => {
            site.classList.toggle("yellowTheme");
            if (site.classList.contains("yellowTheme")) {
                themeName.innerText = "beżowy";
            } else {
                themeName.innerText = "żółty";
            }
        })
    }
    ```
