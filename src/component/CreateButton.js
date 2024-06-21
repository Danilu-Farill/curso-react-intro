function CreateButton() {
    return(
        <div data-bs-theme="dark">
          <button type="button" className="btn-close" aria-label="Close"></button>

          <button type="button" className="btn-close" disabled aria-label="Close"></button>
        </div>
    )
}

export { CreateButton };