// Classe Mouvie qui représente un film avec ses attributs : titre, support, date et rating (note)
class Mouvie {
  constructor(title, support, date, rating) {
      this.title = title;
      this.support = support;
      this.date = date;
      this.rating = rating;
  }
}

// Tableau contenant des instances de Mouvie avec différents films
const revers = [
  new Mouvie('The Shawshank Redemption', 'Drama', '1994', '5'),
  new Mouvie('The Godfather', 'Crime, Drama', '1972', '3'),
  new Mouvie('The Dark Knight', 'Action, Crime, Drama', '2008', '2'),
  new Mouvie('Pulp Fiction', 'Crime, Drama', '1994', '5'),
  new Mouvie('The Lord of the Rings: The Return of the King', 'Adventure, Drama, Fantasy', '2003', '1'),
  new Mouvie('Forrest Gump', 'Drama, Romance', '1994', '5'),
  new Mouvie('Inception', 'Action, Adventure, Sci-Fi', '2010', '5'),
  new Mouvie('Fight Club', 'Drama', '1999', '3'),
  new Mouvie('The Matrix', 'Action, Sci-Fi', '1999', '4'),
  new Mouvie('Goodfellas', 'Biography, Crime, Drama', '1990', '5')
];

// Fonction pour afficher le tableau des films (revers) dans le tableau HTML (row)
function afficherTablehtml() {
  let row = document.getElementById('mouvie');
  row.innerHTML = ""; // Réinitialise le contenu de row

  // Cache certains éléments et affiche ceux nécessaires pour la vue actuelle
  document.getElementById('Movies').style.display = "none";
  document.getElementById('recherche-titre').style.display = "inline-block";
  document.getElementById('rechercher').style.display = "inline-block";
  document.getElementById('routerne').style.display = "inline-block";

  // Boucle pour afficher chaque film dans le tableau HTML
  for (let i = 0; i < revers.length; i++) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
          <td>Title: ${revers[i].title}</td>
          <td>Support: ${revers[i].support}</td>
          <td>Date: ${revers[i].date}</td>
          <td>Rating: ${revers[i].rating}</td>
          <td><button class="supprimerbutton" onclick="supprimerMovie(this)">X</button></td>
      `;
      row.appendChild(tr);
  }
  console.log(revers);
}

// Fonction pour rechercher un film par son titre dans le tableau revers et afficher les résultats
function rechercherfilme() {
  let titreInput = document.getElementById('recherche-titre').value.toLowerCase();
  let row = document.getElementById('mouvie');
  row.innerHTML = ''; // Réinitialise le contenu de row

  if (titreInput === "") {
      alert('Cette inpute est vide.');
      return;
  }

  let veriffier = true;
  for (let i = 0; i < revers.length; i++) {
      if (revers[i].title.toLowerCase().trim().includes(titreInput)) {
          const tr = document.createElement("tr");
          tr.innerHTML = `
              <td>Title: ${revers[i].title}</td>
              <td>Support: ${revers[i].support}</td>
              <td>Date: ${revers[i].date}</td>
              <td>Rating: ${revers[i].rating}</td>
              <td><button class="supprimerbutton" onclick="supprimerMovie(this)">X</button></td>
          `;
          row.appendChild(tr);
          document.getElementById('recherche-titre').value = "";
          veriffier = false;
      }
  }

  if (veriffier) {
      alert("Ce titre n'est pas exact.");
  }
}

// Fonction pour préparer l'ajout d'un nouveau film en affichant le formulaire approprié
function addMovies() {
  document.getElementById('mouvie').style.display = "none";
  document.getElementById('creeMovie').style.display = "block";
  document.getElementById('Movies').style.display = "none";
  document.getElementById('add-Movies').style.display = "none";
  document.getElementById('recherche-titre').style.display = "none";
  document.getElementById('rechercher').style.display = "none";
  document.getElementById('routerne').style.display = "none";
}

// Fonction pour ajouter un nouveau film au tableau revers et l'afficher dans le tableau HTML
function affcherAddMouvie() {
  const titre = document.getElementById('title').value;
  const support = document.getElementById('support').value;
  const date = document.getElementById('Date').value;
  const rating = document.getElementById('rating').value;

  if (titre === "" || support === "" || date === "" || rating === "") {
      alert('Remplissez tous les champs.');
      return;
  }

  let mouvie = new Mouvie(titre, support, date, rating);
  revers.push(mouvie);

  document.getElementById('mouvie').style.display = "block";
  document.getElementById('rechercher').style.display = "inline-block";
  document.getElementById('recherche-titre').style.display = "inline-block";
  document.getElementById('add-Movies').style.display = "block";
  document.getElementById('routerne').style.display = "inline-block";
  document.getElementById('creeMovie').style.display = "none";

  // Réinitialise row et affiche tous les films
  let row = document.getElementById('mouvie');
  row.innerHTML = '';
  for (let i = 0; i < revers.length; i++) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
          <td>Title: ${revers[i].title}</td>
          <td>Support: ${revers[i].support}</td>
          <td>Date: ${revers[i].date}</td>
          <td>Rating: ${revers[i].rating}</td>
          <td><button class="supprimerbutton" onclick="supprimerMovie(this)">X</button></td>
      `;
      row.appendChild(tr);
  }

  // Vide les champs du formulaire
  document.getElementById('title').value = "";
  document.getElementById('support').value = "";
  document.getElementById('Date').value = "";
  document.getElementById('rating').value = "";
}

// Fonction pour supprimer un film de la liste revers et mettre à jour l'affichage
function supprimerMovie(button) {
  button.parentElement.parentElement.remove();
}
