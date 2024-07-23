import './App.css'

export function App () {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'> 
        <img className='tw-followCard-avatar' src="https://this-person-does-not-exist.com/img/avatar-gen648c05f4c576887e2b1b626de498a12b.jpg" alt="El Avatar " />
        <div className='tw-followCard-info'>
          <strong>
            Francisca Merino
          </strong>
          <span className='tw-followCard-infoUserName'>@franmer</span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>
          Seguir
        </button>
      </aside>
    </article>
  )
}