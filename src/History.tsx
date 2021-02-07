type squaresArr = (string | null)[];

interface historyObj {
    squares: squaresArr;
}

interface historyProps {
    history: historyObj[];
    jumpToStepInHistory: (step: number) => void;
    currentStep: number;
}

function History(props: historyProps) {

    const {history, jumpToStepInHistory, currentStep} = props;
    const historyLength = history.length;

    // Previous Button
    const previousButtonAttrs = {
        onClick: () => jumpToStepInHistory(currentStep - 1),
        disabled: false
    }
    if (currentStep === 0) {
        previousButtonAttrs.disabled = true;
    }

    // Next Button
    const nextButtonAttrs = {
        onClick: () => jumpToStepInHistory(currentStep + 1),
        disabled: false
    }
    if (historyLength - 1 === currentStep) {
        nextButtonAttrs.disabled = true;
    }

    return (
        <div className="history" role="region" aria-label="Game History" data-testid="history">
            <div className="history-nav">
                <button {...previousButtonAttrs}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-left" className="svg-inline--fa fa-caret-left fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"></path></svg><span className="sr-only">Previous Step</span></button>
                    <span className="history-current-step" aria-live="polite" aria-atomic="true"><span className="sr-only">Step </span>{currentStep}&nbsp;/&nbsp;<span className="sr-only">of </span>{historyLength - 1}</span>
                <button {...nextButtonAttrs}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" className="svg-inline--fa fa-caret-right fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg><span className="sr-only">Next Step</span></button>
            </div>
        </div>
    );
}

export default History;