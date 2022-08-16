{
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

    {
        const buttonRemove = document.querySelector(".js-buttonRemove");
        const navigation = document.querySelector(".navigation");
        const removeNavigation = document.querySelector(".js-removeNavigation");

        buttonRemove.addEventListener("click", () => {
            navigation.classList.toggle("deleteNavigation");
            removeNavigation.innerText = navigation.classList.contains("deleteNavigation") ? "Pokaż" : "Usuń";
        });
    }
}