import './upgrade.css'

export default function Upgrade() {
    return (
        <div class="upgrade-container">

                            
            <div class="cpu-container-book">
                <h2>Processor</h2>

                
                <div class="cpu-box active" data-js="cpuList">
                    <p>Ryzen 5 4600H 6-cores/12-threads 3.0Ghz</p>
                    <span class="off" data-js="cpu-price"></span>
                </div>

                
                <div class="cpu-box" data-js="cpuList">
                    <p>Ryzen 7 4800H 8-cores/16-threads 2.9Ghz</p>
                    <span data-js="cpu-price">+ $300</span>
                </div>
            </div>
        </div>
    )
}