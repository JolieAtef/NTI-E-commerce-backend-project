class ApiErrors extends Error {
   
    private status: string;
    constructor(message: string, private statusCode: number) {
      super(message); //for class (Error)
      this.status = `${this.statusCode}`.startsWith('4') ? 'failed' : 'error'
    };
  }
  
  export default ApiErrors;