import { appReducer, setResults } from './reducer'


test('Set results should add result to array', () => {
    const state = {
        results: [1, 2, 3]
    }
    const result = [1, 2, 3, 42]

    const newState = appReducer(state, setResults(42))

    expect(newState.results.length).toBe(4)
    expect(newState.results[3]).toBe(42)
    expect(newState.results).toEqual(result)
})