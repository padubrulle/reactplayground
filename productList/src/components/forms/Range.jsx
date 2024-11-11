/**
 * 
 * @param {int} min 
 * @param {int} max 
 * @param {(s:string) => void} onChange 
 * @returns 
 */
export function Range({min, max, onChange, label, value}){
    return <div>
                <p className="form-check-p">{label}</p>
                <input
                    id="priceRange"
                    type="range"
                    className="form-range"
                    min={min} max={max}
                    onChange={(e) => onChange(e.target.value)}
                />
                <label htmlFor="priceRange" className="form-check-label">{value}$</label>
            </div>
}