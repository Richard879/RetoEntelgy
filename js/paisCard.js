const template = document.createElement('template');

template.innerHTML = `
  <style>
  
  .grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 35px;
    font-size: 12px;
    text-align: center;
  }

  h1{
    font-size: 12px;
  }

  /* The Modal (background) */
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }
  
  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
  }
  
  /* The Close Button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  </style>
  <div class="grid-item">
    <a href="#" id="modal-info">
      <p></p>
    <a>    
    <h1></h1>
    <h4></h4>
  </div>

  <div id="myModal" class="modal">
    <div class="modal-content">
      <span class="close" id="close">&times;</span>
      <h2>Some text in the Modal..</h2>
    </div>
  </div>
  
`

class PaisCard extends HTMLElement{
    constructor(){
        super();

        this.showInfo = false;

        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('p').innerText = this.getAttribute('country');
        this.shadowRoot.querySelector('h1').innerText = this.getAttribute('capital');
        this.shadowRoot.querySelector('h4').innerText = this.getAttribute('population');
    }

    connectedCallback(){
      this.shadowRoot.querySelector('#modal-info').addEventListener('click', () => this.openModal());
      this.shadowRoot.querySelector('#close').addEventListener('click', () => this.closeModal());
      this.shadowRoot.querySelector('h2').innerText = this.getAttribute('continent');
    }

    openModal(){
      console.log('open Modal');
      const info = this.shadowRoot.querySelector('.modal');
      info.style.display = 'block';
    }

    closeModal(){
      console.log('close Modal');
      const info = this.shadowRoot.querySelector('.modal');
      info.style.display = 'none';
    }

    disconnectedCallback(){
      this.shadowRoot.querySelector('#modal-info').removeEventListener();
      this.shadowRoot.querySelector('#close').removeEventListener();
    }
}
window.customElements.define('pais-card', PaisCard);