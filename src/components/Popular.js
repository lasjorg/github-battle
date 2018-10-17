import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {fetchPopularRepos} from '../utils/api'

const SelectedLanguage = (props) => {
  const langs = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return(
    <ul className="langs">
      { langs.map(lang => 
          <li 
            style={lang === props.selectedLanguage ? { color: '#d0021b' } : null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
              {lang}
          </li>
        )
      }
    </ul>
  )
}

const RepoGrid = (props) => {
  return(
    <ul className='popular-list'>
      {props.repos.map( (repo,index) => {
        return (
          <li key={repo.name} className='popular-item'>
            <div className='popular-rank'>#{index + 1}</div>
              <ul className='space-list-item'>
                <li>
                  <img 
                    className='avatar'
                    src={repo.owner.avatar_url} 
                    alt={`Avatar for ${repo.owner.login}`}
                  />
                </li>
                <li><a href={repo.html_url}>{repo.name}</a></li>
                <li>@{repo.owner.login}</li>
                <li>{repo.stargazers_count} stars</li>
              </ul>
          </li>
        )
      })}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
}

SelectedLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null
    };

    this.updateLang = this.updateLang.bind(this);
  }

  componentDidMount() {
    this.updateLang(this.state.selectedLanguage);
  }

  updateLang (lang) {
    this.setState({
      selectedLanguage:lang,
      repos: null
    });

    fetchPopularRepos(lang)
      .then( repos => {
        this.setState({
          repos
        })
      });
  }

  render() {
    return(
      <div>
        <SelectedLanguage 
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLang}/>
          {!this.state.repos ? 
            <p>LOADING</p> : <RepoGrid repos={this.state.repos} />
          }
      </div>
    )
  }
}

export default Popular;