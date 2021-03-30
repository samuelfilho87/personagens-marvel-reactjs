import { Link } from "react-router-dom";
import { Container, CharacterAvatar } from "./styles";

interface Events {
  name: string;
}

interface Series {
  name: string;
}

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }
  events: {
    items: Events[];
  }
  series: {
    items: Series[];
  }
}

interface CharactersTableProps {
  characters: Character[];
}

export function CharactersTable({ characters }: CharactersTableProps) {

  function handleShowMoreSeries(id: number): void {
    const series = document.getElementsByClassName(`hide-series ${id}`);
    const button = document.getElementById(`button-show-series-${id}`);

    for (let i = 0; i < series.length; i++) {
      series[i].setAttribute('class', 'show-series');
    }

    if (button) button.style.display = 'none';
  }

  function handleShowMoreEvents(id: number): void {
    const events = document.getElementsByClassName(`hide-events ${id}`);
    const button = document.getElementById(`button-show-events-${id}`);

    for (let i = 0; i < events.length; i++) {
      events[i].setAttribute('class', 'show-events');
    }

    if (button) button.style.display = 'none';
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Personagem</th>
            <th>Séries</th>
            <th>Eventos</th>
          </tr>
        </thead>

        <tbody>
          {characters.map(character => (
            <tr key={character.id}>
              <td>
                <CharacterAvatar>
                  <Link to={`character/${character.id}`}>
                    <img
                      src={`${character.thumbnail.path.replace('http', 'https')}/portrait_uncanny.${character.thumbnail.extension}`}
                      alt={character.name}
                    />
                  </Link>
                </CharacterAvatar>
              </td>
              <td>
                <Link to={`character/${character.id}`}>
                  {character.name}
                </Link>
              </td>
              <td>
                {character.series.items.map((serie, index) => (
                  <span
                    key={serie.name + Math.random().toString(36).substr(2, 9)}
                    className={index > 2 ? `hide-series ${character.id}` : ''}
                  >
                    {serie.name}<br />
                  </span>
                ))}

                {character.series.items.length > 3 && (
                  <button
                    id={`button-show-series-${character.id}`}
                    onClick={() => handleShowMoreSeries(character.id)}
                  >
                    VER MAIS
                  </button>
                )}
              </td>
              <td>
                {character.events.items.map((event, index) => (
                  <span
                    key={event.name + Math.random().toString(36).substr(2, 9)}
                    className={index > 2 ? `hide-events ${character.id}` : ''}
                  >
                    {event.name}<br />
                  </span>
                ))}

                {character.events.items.length > 3 && (
                  <button
                    id={`button-show-events-${character.id}`}
                    onClick={() => handleShowMoreEvents(character.id)}
                  >
                    VER MAIS
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}