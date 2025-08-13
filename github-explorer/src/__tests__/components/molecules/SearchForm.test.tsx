class SearchFormLogic {
  public onSearch: (value: string) => void
  public value: string
  public isLoading: boolean

  constructor(onSearch: (value: string) => void, initialValue: string = '', isLoading: boolean = false) {
    this.onSearch = onSearch
    this.value = initialValue
    this.isLoading = isLoading
  }
  
  setValue(newValue: string): void {
    this.value = newValue
  }
  
  handleSubmit(): boolean {
    if (this.value.trim() && !this.isLoading) {
      this.onSearch(this.value.trim())
      return true
    }
    return false
  }
  
  isButtonDisabled(): boolean {
    return this.isLoading || !this.value.trim()
  }
  
  getButtonText(): string {
    return this.isLoading ? 'Buscando...' : 'Buscar'
  }
}

describe('SearchForm Logic - Funcionalidade Principal de Busca', () => {
  it('should initialize with correct default values', () => {
    const mockOnSearch = jest.fn()
    const searchForm = new SearchFormLogic(mockOnSearch)
    
    expect(searchForm.value).toBe('')
    expect(searchForm.isLoading).toBe(false)
    expect(searchForm.onSearch).toBe(mockOnSearch)
  })

  it('should initialize with provided initial value', () => {
    const mockOnSearch = jest.fn()
    const searchForm = new SearchFormLogic(mockOnSearch, 'testuser')
    
    expect(searchForm.value).toBe('testuser')
  })

  it('should update value when setValue is called', () => {
    const mockOnSearch = jest.fn()
    const searchForm = new SearchFormLogic(mockOnSearch)
    
    searchForm.setValue('newuser')
    expect(searchForm.value).toBe('newuser')
  })

  it('should call onSearch when handleSubmit is called with valid input', () => {
    const mockOnSearch = jest.fn()
    const searchForm = new SearchFormLogic(mockOnSearch)
    
    searchForm.setValue('testuser')
    const result = searchForm.handleSubmit()
    
    expect(mockOnSearch).toHaveBeenCalledWith('testuser')
    expect(result).toBe(true)
  })

  it('should not call onSearch with empty input', () => {
    const mockOnSearch = jest.fn()
    const searchForm = new SearchFormLogic(mockOnSearch)
    
    const result = searchForm.handleSubmit()
    
    expect(mockOnSearch).not.toHaveBeenCalled()
    expect(result).toBe(false)
  })

  it('should trim whitespace from input before search', () => {
    const mockOnSearch = jest.fn()
    const searchForm = new SearchFormLogic(mockOnSearch)
    
    searchForm.setValue('  testuser  ')
    const result = searchForm.handleSubmit()
    
    expect(mockOnSearch).toHaveBeenCalledWith('testuser')
    expect(result).toBe(true)
  })

  it('should show correct button text based on loading state', () => {
    const mockOnSearch = jest.fn()
    const searchFormLoading = new SearchFormLogic(mockOnSearch, '', true)
    const searchFormNotLoading = new SearchFormLogic(mockOnSearch, '', false)
    
    expect(searchFormLoading.getButtonText()).toBe('Buscando...')
    expect(searchFormNotLoading.getButtonText()).toBe('Buscar')
  })

  it('should disable button when input is empty', () => {
    const mockOnSearch = jest.fn()
    const searchForm = new SearchFormLogic(mockOnSearch)
    
    expect(searchForm.isButtonDisabled()).toBe(true)
  })

  it('should disable button when loading', () => {
    const mockOnSearch = jest.fn()
    const searchForm = new SearchFormLogic(mockOnSearch, 'testuser', true)
    
    expect(searchForm.isButtonDisabled()).toBe(true)
  })

  it('should not submit when loading', () => {
    const mockOnSearch = jest.fn()
    const searchForm = new SearchFormLogic(mockOnSearch, 'testuser', true)
    
    const result = searchForm.handleSubmit()
    
    expect(mockOnSearch).not.toHaveBeenCalled()
    expect(result).toBe(false)
  })

  it('should enable button when input has value and not loading', () => {
    const mockOnSearch = jest.fn()
    const searchForm = new SearchFormLogic(mockOnSearch, 'testuser', false)
    
    expect(searchForm.isButtonDisabled()).toBe(false)
  })
})