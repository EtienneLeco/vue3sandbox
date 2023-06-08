window.pluginAPI.registerPlugin({ id: "customArticle", render: (element, context) => {
    console.log("here");
    const divElement = document.createElement("div");
    divElement.innerHTML = `<h1>Hello ${window.pluginAPI.dataServices.getUser().firstName}</h1>
    <p>You are reading ${context.resourceName} from a plugin</p>
    <button type="button" onclick="document.getElementById('modal').showModal()">Click to open a popup</button>
    <dialog id="modal">
        <p>Can you close me ?</p>
        <form method="dialog">
            <button>Yes I can</button>
        </form>
    </dialog>`;

    element.appendChild(divElement);
} });
