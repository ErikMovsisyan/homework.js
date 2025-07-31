
class Printer {
  print(doc) {
    throw new Error("print() must be implemented");
  }
}

class Scanner {
  scan(doc) {
    throw new Error("scan() must be implemented");
  }
}

class Fax {
  fax(doc) {
    throw new Error("fax() must be implemented");
  }
}
class OldPrinter extends Printer {
  print(doc) {
    console.log("Printing:", doc);
  }
}

