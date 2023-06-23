import {Component} from 'react'

import './index.css'

class SearchItems extends Component {
  render() {
    const {searches, itemDelete, uniqueKey} = this.props
    const {id, domainUrl, logoUrl, timeAccessed, title} = searches

    const onDelete = () => {
      itemDelete(uniqueKey)
    }

    return (
      <li>
        <div className="tain-1">
          <p className="time">{timeAccessed}</p>
          <div className="threeSec">
            <img src={logoUrl} alt="" className="domain logo" />
            <p className="title">{title}</p>
            <p className="domain">{domainUrl}</p>
          </div>
          <div className="tain-2">
            <button type="button" onClick={onDelete} data-testid="delete">
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                alt="delete"
                className="delete"
                onClick={onDelete}
              />
            </button>
          </div>
        </div>
      </li>
    )
  }
}

export default SearchItems
