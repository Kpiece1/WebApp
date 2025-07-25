import React, { useState } from 'react'
import { Play, Square, Zap, Cpu, Wifi, Code } from 'lucide-react'

const RoboticsLab = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [code, setCode] = useState(`// Welcome to the Robotics Lab!
// Control your robot with JavaScript

// Move forward for 2 seconds
robot.move('forward', 2000);

// Turn right 90 degrees
robot.turn('right', 90);

// Flash LED 3 times
robot.flashLED(3);

// Read sensor data
const distance = robot.readSensor('ultrasonic');
console.log('Distance:', distance, 'cm');`)

  const handleConnect = async () => {
    try {
      // Simulate WebUSB connection
      setIsConnected(true)
      // In a real implementation, this would connect to actual hardware
      console.log('Connecting to robot via WebUSB...')
    } catch (error) {
      console.error('Failed to connect to robot:', error)
    }
  }

  const handleDisconnect = () => {
    setIsConnected(false)
    setIsRunning(false)
  }

  const handleRunCode = () => {
    if (!isConnected) {
      alert('Please connect to a robot first!')
      return
    }
    
    setIsRunning(true)
    // Simulate code execution
    setTimeout(() => {
      setIsRunning(false)
      console.log('Code execution completed')
    }, 3000)
  }

  const handleStopCode = () => {
    setIsRunning(false)
  }

  const examples = [
    {
      title: 'Basic Movement',
      code: `robot.move('forward', 1000);
robot.turn('left', 90);
robot.move('backward', 500);`
    },
    {
      title: 'Sensor Reading',
      code: `const distance = robot.readSensor('ultrasonic');
if (distance < 10) {
  robot.move('backward', 500);
  robot.turn('right', 180);
}`
    },
    {
      title: 'LED Patterns',
      code: `for (let i = 0; i < 5; i++) {
  robot.setLED('red');
  robot.wait(200);
  robot.setLED('off');
  robot.wait(200);
}`
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Robotics Lab
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Program real robots using JavaScript and WebUSB technology. Write code, connect to hardware, and see your programs come to life!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Code Editor */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-800 text-white px-6 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5" />
                  <span className="font-medium">Robot Controller</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-400' : 'bg-red-400'}`}></div>
                  <span className="text-sm">
                    {isConnected ? 'Connected' : 'Disconnected'}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-96 font-mono text-sm bg-gray-900 text-green-400 p-4 rounded-lg border-none resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your robot control code here..."
                />
                
                <div className="flex items-center justify-between mt-6">
                  <div className="flex space-x-3">
                    {!isConnected ? (
                      <button
                        onClick={handleConnect}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      >
                        <Wifi className="h-4 w-4 mr-2" />
                        Connect Robot
                      </button>
                    ) : (
                      <button
                        onClick={handleDisconnect}
                        className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                      >
                        <Wifi className="h-4 w-4 mr-2" />
                        Disconnect
                      </button>
                    )}
                  </div>
                  
                  <div className="flex space-x-3">
                    {!isRunning ? (
                      <button
                        onClick={handleRunCode}
                        disabled={!isConnected}
                        className="flex items-center px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Run Code
                      </button>
                    ) : (
                      <button
                        onClick={handleStopCode}
                        className="flex items-center px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                      >
                        <Square className="h-4 w-4 mr-2" />
                        Stop
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Robot Status */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Cpu className="h-5 w-5 mr-2" />
                Robot Status
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Connection:</span>
                  <span className={`font-medium ${isConnected ? 'text-green-600' : 'text-red-600'}`}>
                    {isConnected ? 'Connected' : 'Disconnected'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className={`font-medium ${isRunning ? 'text-blue-600' : 'text-gray-600'}`}>
                    {isRunning ? 'Running' : 'Idle'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Battery:</span>
                  <span className="font-medium text-green-600">87%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sensors:</span>
                  <span className="font-medium text-green-600">Active</span>
                </div>
              </div>
            </div>

            {/* Code Examples */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                Quick Examples
              </h3>
              
              <div className="space-y-3">
                {examples.map((example, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <h4 className="font-medium text-gray-900 mb-2">{example.title}</h4>
                    <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                    <button
                      onClick={() => setCode(example.code)}
                      className="mt-2 text-xs text-blue-600 hover:text-blue-800"
                    >
                      Use this example
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Help */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Need Help?
              </h3>
              <p className="text-blue-700 text-sm mb-3">
                Check out our documentation for robot API reference and tutorials.
              </p>
              <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                View Docs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoboticsLab