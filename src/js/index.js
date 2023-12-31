class windowJS {
	// Método construtor
	constructor(domIdentifier = false, obj = {}) {
		// Valida recebeu o identificador do elemento
		if (!domIdentifier) {
			throw new Error(
				"Its necessary to inform the element identifier to create the window"
			);
		} else {
			// Valida se o elemento existe
			if (!document.querySelector(domIdentifier)) {
				throw new Error("The element informed does not exist");
			} else {
				// Busca o elemento
				this.element = document.querySelector(domIdentifier);
			}
		}

		// Define o titulo da janela a partir do objeto
		this.title = obj.title || null;

		// Define o id da janela a partir do objeto
		this.id = obj.id || false;

		// Define se por padrão a janela será aberta ou não
		this.autoOpen = obj.autoOpen || false;

		// Define o width da janela a partir do objeto
		this.width = obj.width || "80%";

		// Define o height da janela a partir do objeto
		this.height = obj.height || "500px";

		// Define se o conteúdo da janela será draggable
		this.draggable = obj.draggable || false;

		this.createWindow();
	}

	// Método para criar a janela no DOM
	createWindow() {
		// Cria a janela
		const windowJS = document.createElement("div");
		// Adiciona a classe windowjs
		windowJS.classList.add("windowjs");

		// Verifica se a janela será aberta automaticamente
		if (this.autoOpen) {
			// Adiciona a classe active
			windowJS.classList.add("active");
		}

		// Define os estilos da janela
		windowJS.style.width = this.width;
		windowJS.style.height = this.height;

		// Verifica se foi informado um id para a janela
		if (this.id) {
			// Adiciona o id na janela
			windowJS.id = this.id;
		}

		// Cria um id dinamico para a janela e adiciona ele no atributo data-id
		this.windowId = `windowjs-${Math.floor(Math.random() * 1000000)}`;
		windowJS.setAttribute("data-id", this.windowId);

		// Busca o header da janela
		const windowHeader = this.createWindowHeader();

		// Adiciona o header no elemento window
		windowJS.appendChild(windowHeader);

		// Busca o conteúdo da janela
		const windowContent = this.getContentForWindow();

		// Adiciona o conteúdo no elemento window
		windowJS.appendChild(windowContent);

		// Adiciona a janela no body
		document.body.appendChild(windowJS);
	}

	// Método para criar o header da janela
	createWindowHeader() {
		// Cria o elemento do header da janela
		const windowHeader = document.createElement("div");

		// Adiciona a classe windowjs-title
		windowHeader.classList.add("windowjs-header");

		const windowTitle = this.createWindowTitle();

		const windowCloseButton = this.createWindowCloseButton();

		// Adiciona o titulo no header
		windowHeader.appendChild(windowTitle);

		// Adiciona o botão de fechar no header
		windowHeader.appendChild(windowCloseButton);

		// Verifica se o conteúdo da janela será draggable
		if (this.draggable) {
			this.activeDragAndDrop(windowHeader);
		}

		// Retorna o header
		return windowHeader;
	}

	// Método para criar o titulo da janela
	createWindowTitle() {
		// Cria um elemento para o texto do titulo
		const windowTitle = document.createElement("p");

		// Adiciona o texto do titulo
		windowTitle.innerText = this.title;

		return windowTitle;
	}

	// Método para criar o botão de fechar a janela
	createWindowCloseButton() {
		// Cria o botão de fechar
		const windowCloseButton = document.createElement("a");

		// Adiciona o atributo href no botão
		windowCloseButton.setAttribute("href", "javascript:;");

		// Adiciona a classe windowjs-close
		windowCloseButton.classList.add("windowjs-btn-close");

		// Adiciona o evento de click no botão
		windowCloseButton.addEventListener("click", () => {
			// Busca a janela pelo data-id
			const windowJS = document.querySelector(
				`[data-id="${this.windowId}"]`
			);

			// Remove a janela
			windowJS.classList.remove("active");
		});

		// Adiciona um svg no botão
		const windowCloseButtonIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`;

		// Adiciona o icone no botão
		windowCloseButton.innerHTML = windowCloseButtonIcon;

		// Retorna o botão
		return windowCloseButton;
	}

	// Método para buscar o conteúdo da janela
	getContentForWindow() {
		// Move o element para o conteúdo da janela
		this.element.parentNode.removeChild(this.element);

		// Copia todo o conteudo do elemento
		const content = this.element.innerHTML;

		// Cria um elemento para o conteudo
		const windowContent = document.createElement("div");

		// Adiciona a classe windowjs-content
		windowContent.classList.add("windowjs-content");

		// Adiciona o conteudo no elemento
		windowContent.innerHTML = content;

		// retorna o conteudo
		return windowContent;
	}

	// Método para abrir a janela
	openWindow() {
		// Busca a janela pelo data-id
		const windowJS = document.querySelector(`[data-id="${this.windowId}"]`);

		// Adiciona a classe active
		windowJS.classList.add("active");
	}

	// Método para tornar a janela draggable
	activeDragAndDrop(windowHeader) {
		windowHeader.classList.add("draggable");

		// Adiciona o evento de mouse down no header
		windowHeader.addEventListener("mousedown", (e) => {
			const windowJS = windowHeader.parentNode;

			windowJS.setAttribute("data-drag", true);

			// Busca a posição do mouse
			const x = e.clientX;
			const y = e.clientY;

			// Busca a posição da janela
			const windowX = windowJS.offsetLeft;
			const windowY = windowJS.offsetTop;

			// Calcula a diferença entre a posição do mouse e a posição da janela
			const diffX = x - windowX;
			const diffY = y - windowY;

			// Adiciona o evento de mouse move no body
			windowHeader.addEventListener("mousemove", (e) => {
				if (
					windowHeader.parentNode.getAttribute("data-drag") == "true"
				) {
					// Busca a posição do mouse
					const x = e.clientX;
					const y = e.clientY;

					// Calcula a nova posição da janela
					const newX = x - diffX;
					const newY = y - diffY;

					// Define a nova posição da janela
					windowJS.style.left = `${newX}px`;
					windowJS.style.top = `${newY}px`;
				}
			});
		});

		// Remove o evento do windowHeader
		windowHeader.addEventListener("mouseup", () => {
			windowHeader.parentNode.setAttribute("data-drag", false);
		});
	}
}
