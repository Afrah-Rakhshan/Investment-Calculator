
export default function Input({onChange, Input}) {
  return (
    <form id="user-input">
      <div className="input-group">
        <p>
          <label>
            INITIAL INVESTMENT
            <input
              type="Number"
              required
              value={Input.initialInvestment}
              onChange={(event) =>
                onChange("initialInvestment", event.target.value)
              }
            />
          </label>{" "}
        </p>
        <p>
          <label>
            ANNUAL INVESTMENT
            <input
              type="Number"
              required
              value={Input.annualInvestment}
              onChange={(event) =>
                onChange("annualInvestment", event.target.value)
              }
            />
          </label>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>
            EXPECTED RETURN
            <input
              type="Number"
              required
              value={Input.expectedReturn}
              onChange={(event) =>
                onChange("expectedReturn", event.target.value)
              }
            />
          </label>
        </p>
        <p>
          <label>
            DURATION
            <input
              type="Number"
              required
              value={Input.duration}
              onChange={(event) =>
                onChange("duration", event.target.value)
              }
            />
          </label>
        </p>
      </div>
    </form>
  );
}
